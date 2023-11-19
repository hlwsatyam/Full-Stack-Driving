const ErrorHandling = (err, req, res, next) => {
  const message = err.message;
  const status = err.status || 503;
  return res.status(status).json({
    message,
    status: false,
  });
};

module.exports = { ErrorHandling };
