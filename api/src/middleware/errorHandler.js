const errorHandler = (err, req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(500).json({
    code: 500,
    message: err.message,
    result: {},
    success: false,
  });
};

module.exports = errorHandler;
