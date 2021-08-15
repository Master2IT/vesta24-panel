if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') {
  module.exports = require('./config.production');
} else {
  module.exports = require('./config.dev');
}

