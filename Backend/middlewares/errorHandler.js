export const errorHandler = (err, req, res, _next) => {
  console.error(`[Error] ${err.message}`, err.stack ? `\n${err.stack}` : '');

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
};
