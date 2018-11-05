"use strict";
const express = require("express");
const helpers = require("../db/dbHelper/");
const router = express.Router();
const middlewareFunctions = require("../middleware/postMiddlewares.js");
// start gets
router.get("/", (req, res, next) => {
  helpers
    .getPosts()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      err.code = 500;
      next(err);
    });
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  helpers
    .getPost(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      err.code = 500;
      next(err);
    });
});
// end gets

// start delete
router.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  helpers
    .delPost(id)
    .then(posts => {
      if (posts === 0) {
        res.status(404).json({
          message: "The post with the specified ID does not exist.",
        });
      } else {
        res.status(200).json({ message: "Post removed successfully." });
      }
    })
    .catch(err => {
      err.code = 500;
      next(err);
    });
});
// end delete

// start put
router.put("/:id", (req, res, next) => {
  const newPost = req.body;
  console.log("REQUEST", newPost);
  if (!newPost.title || !newPost.content) {
    err.code = 406;
    next(err);
  } else {
    helpers
      .putPost(newPost)
      .then(posts => {
        console.log("POSTS PUT", posts);
        res.status(200).json({ message: "Post successfully modified." });
      })
      .catch(err => {
        err.code = 500;
        next(err);
      });
  }
});
// end put

// start post
router.post("/", middlewareFunctions.addTimeStamp, (req, res, next) => {
  const post = req.body;
  if (!post.title || !post.content) {
    err.code = 406;
    next(err);
  } else {
    helpers
      .addPost(post)
      .then(posts => {
        res.status(201).json({ message: "Post successfully added." });
      })
      .catch(err => {
        err.code = 500;
        next(err);
      });
  }
});
// end post

module.exports = router;
