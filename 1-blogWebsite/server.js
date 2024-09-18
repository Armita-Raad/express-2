const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const loggerMiddleware = require("./middleware/logger");
const path = require("path");

const PORT = process.env.PORT || 1140;

app.use(
  express.json(),
  express.urlencoded({ extended: true }),
  cors(),
//   loggerMiddleware
);

app.use("/", require("./routes/blog.routes"));

app.use("*", (req, res) => {
  res.status(404).json({ error: true, message: "not found" });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
