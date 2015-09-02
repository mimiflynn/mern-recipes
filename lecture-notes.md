Talking Points
- server side views must be set to .jsx files - aka react templates
- explain require and grunt and webpack and babel for es6
- leave out es6 for easier intro to junior devs?

# Isomophic React

## Assumptions
- familiarity wth javascript only in the realm of front end development
- no prior backend JS experience although perhaps with some build tools

# Javascript modules

A handy chunk of javascript usually kept in its own individual file and loaded via require() statements.

## require()

Require allows a dev to include a library (module) in their file.

```
var _ = require('underscore');

module.exports = {

};
```

# Build Tools

## npm

Dependencies to external libraries and tools are loaded into the project via `npm`. 

```
npm install
```

## Grunt

Runs web server as well.



## Webpack

https://webpack.github.io

Bundles modules into a big file to load client side.

https://webpack.github.io/docs/configuration.html

webpack suggests using its own server thingy, but since we are going to be running a backend api 

https://github.com/webpack/grunt-webpack

## Babel

Needed to read jsx and es6.

https://babeljs.io

https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement


# Client Side

## React

## Flux

https://github.com/facebook/flux

## Bootstrap

# Server Side

## ExpressJS

http://expressjs.com/

## Passport

Authentication - http://passportjs.org/

http://mherman.org/blog/2015/01/31/local-authentication-with-passport-and-express-4/#.VeSFltNVhBc

## MongoDB

https://www.mongodb.org/

## Mongoose

http://mongoosejs.com/index.html

## References

https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement

https://github.com/madhums/node-express-mongoose-demo

