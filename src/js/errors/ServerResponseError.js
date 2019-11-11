const util = require('util');

function ServerResponseError(message) {
  this.message = message;
  Error.captureStackTrace(this, ServerResponseError);
}

util.inherits(ServerResponseError, Error);
ServerResponseError.prototype.name = 'ServerResponseError';

module.exports = ServerResponseError;
