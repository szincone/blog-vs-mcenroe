"use strict";
// dependencies
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
// routes
const postRoutes = require("../routes/postRoute.js");

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use("/posts", postRoutes);
  server.use(morgan("dev"));
};
