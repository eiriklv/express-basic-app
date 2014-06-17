Express Basic Application
=========================

![express basic application](http://s29.postimg.org/osrdfy24n/preview.png "Express Basic Application")

#### Built with:
* [node.js](http://www.nodejs.org/)
* [express](http://www.expressjs.com/)
* [gulp](http://www.gulpjs.com/)
* [convict](http://github.com/mozilla/node-convict/)
* [browserify](http://www.browserify.org/)
 * [hbsfy](http://github.com/epeli/node-hbsfy/)
 * [envify](http://github.com/hughsk/envify/)
* [handlebars](http://handlebarsjs.com/)
* [sass](http://sass-lang.com/)
* [bootstrap](http://getbootstrap.com/)
* [fontawesome](http://fortawesome.github.io/Font-Awesome/)
* [jquery](http://www.jquery.com/)

#### Testing:
* [mocha](http://visionmedia.github.io/mocha/)
* [chai](http://chaijs.com/)
* [sinon](http://sinonjs.org/)

#### Dependencies:
* [mongodb](http://www.mongodb.org/)
* [redis](http://redis.io/)

#### Install dependencies:
* `brew install redis`
* `brew install mongodb`
* `npm install -g mocha`
* `npm install -g gulp`
* `npm install`

#### Environment variables
* `PORT` - Port exposed by this component.
 * example: `3000`
* `DEBUG` - Debug output (* for all) (optional)
 * example: `*`
* `NODE_ENV` - Environment ('development', 'staging', 'production')
 * example: `development`
* `CLIENT_API_PATH` - Path to the client REST api (relative)
 * example: `/api`
* `APPSECRET` - Application session secret
 * example: `sOmeCrAzYhAsH894372`
* `SESSION_KEY` - Application session secret (optional)
 * example: `express.sid` (defaults to `connect.sid`)
* `REDIS_URL` - Redis url (including authentication)
 * example: `redis://user:pass@localhost:6379`
* `REDIS_DB` - Redis database number (optional)
 * example: `1`
* `REDIS_SESSION_PREFIX` - Prefix for redis session entries (optional)
 * example: `sess:`
* `MONGO_URL` - MongoDB url (including authentication)
 * example: `mongodb://user:pass@localhost:27017/mydatabase`

#### Run tests:
* `npm test` or `mocha -R spec`

#### Run the application:
* set environment variables
* `gulp`
* (create a shellscript with the above for convenience if you want)
* navigate your browser to `http://localhost:3000` (or whatever port you chose for `PORT`)