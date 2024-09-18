const logger = (req, res, next) => {
  if (req.url === "/") {
    console.log(
      `the API has a new method: ${req.method} request for URL: ${req.url}`
    );
    next();
  } else {
    res
      .status(403)
      .json({
        error: true,
        message: `you don't have access to url: ${req.url}`,
      });
  }
};

module.exports = logger;
