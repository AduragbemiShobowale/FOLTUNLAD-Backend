const error = (err, req, res, next) => {
  if (err instanceof Error) {
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  } else {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = error;
