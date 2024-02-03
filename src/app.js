const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const createError = require("http-errors");
const xssClean = require("xss-clean"); 
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");
const seedRouter = require("./routers/seedRouter");


//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Prevent XSS Attacks
app.use(xssClean());
//Limit Request from API
const rateLimiter = rateLimit({
  max: 5,
  windowMs: 1 * 60 * 1000, //1 Minutes
  message: "Too many request from this IP, please try again later.",
});
app.use(rateLimiter);
app.use("/api/users",userRouter);
app.use("/api/seed",seedRouter);

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
