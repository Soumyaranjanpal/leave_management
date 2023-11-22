class ErrorHandler extends Error {
  constructor(message, statusCode) {
    // super(message);
    super();
    this.message = message;
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHandler;