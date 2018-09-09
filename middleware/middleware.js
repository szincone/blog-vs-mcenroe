"use strict";
// dependencies
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
// routes
const postRoutes = require("../routes/postRoute.js");

function errorHandler (err, req, res, next){
  res.status(500).json({
    error: "something broke!"
  })
}


module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(morgan("dev"));
  server.use("/posts", postRoutes);
  server.use(errorHandler)
};
