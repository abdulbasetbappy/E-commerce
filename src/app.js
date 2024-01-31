const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.get("/test", (req, res) => {
  res.status(200).send({
    message: "Test Successfull",
  });
});

//Client Error Handling & 404 Route
app.use((req, res, next) => {
  next(createError(404, "Route not found"));
});

//Server Error Handling
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
