import { errorConstants } from "../utils/constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case errorConstants.VALIDATION_ERROR:
      res.json({
        title: "Validation failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.NOT_FOUND:
      res.json({
        title: "NOT_FOUND",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.UNAUTHORIZED:
      res.json({
        title: "UN AUTHORIZED",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case errorConstants.SERVER_ERROR:
      d;
      res.json({
        title: "SERVER ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      res.json({
        message: "error not defined",
        stackTrace: err.stack,
      });
      break;
  }
};

export default errorHandler;
