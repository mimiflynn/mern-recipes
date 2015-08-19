'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Contact = mongoose.model('Contact'),
  _ = require('lodash');

exports.index = function (req, res) {
  Contact.find().sort('-created').populate('user', 'name username').exec(function (err, contact) {
    res.render('index', {
      title: 'Server Side Rendering',
      contacts: contact
    })
  });
}

/**
 * Find contact by id
 */
exports.contact = function (req, res, next, id) {
  Contact.load(id, function (err, contact) {
    if (err) {
      return next(err);
    }
    if (!contact) {
      return next(new Error('Failed to load contact ' + id));
    }
    req.contact = contact;
    next();
  });
};

/**
 * Create a contact
 */
exports.create = function (req, res) {
  var contact = new Contact(req.body);
  contact.user = req.user;

  contact.save(function (err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot save the contact'
      });
    }
    res.jsonp(contact);
  });
};

/**
 * Update a contact
 */
exports.update = function (req, res) {
  var contact = req.contact;

  contact = _.extend(contact, req.body);

  contact.save(function (err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot update the contact'
      });
    }
    res.jsonp(contact);
  });
};

/**
 * Delete an contact
 */
exports.destroy = function (req, res) {
  var contact = req.contact;

  contact.remove(function (err) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot delete an contact'
      });
    }
    res.json(contact);

  });
};

/**
 * Show an contact
 */
exports.show = function (req, res) {
  res.jsonp(req.contact);
};

/**
 * List of contacts
 */
exports.all = function (req, res) {
  Contact.find().sort('-created').populate('user', 'name username').exec(function (err, contact) {
    if (err) {
      return res.status(500).json({
        error: 'Cannot list the contacts'
      });
    }
    res.jsonp(contact);
  });
};
