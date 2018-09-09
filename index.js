"use strict";
const express = require("express");
const server = new express();
// const helmet = require("helmet");
// const morgan = require("morgan");
// const postRoutes = require("./routes/postRoute.js");

// middleware
const configureMiddleware = require("./middleware/middleware.js");
configureMiddleware(server);

const PORT = 9000;

// server.use(helmet());
// server.use(express.json());
// server.use("/posts", postRoutes);
// server.use(morgan("dev"));

// server.get("/", (req, res, next) => {
//   try {
//     res.status(200).json({ status: true });
//   } catch (err) {
//     next(err);
//   }
// });

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
