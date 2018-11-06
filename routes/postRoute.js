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
      // if posts response is empty
      if (posts.length === 0) {
        // assign error code property to posts
        posts.code = 404;
        // pass to error handler
        next(posts);
      } else {
        res.status(200).json(posts);
      }
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
      // if posts response is false (0)
      if (posts === 0) {
        // reassign posts num to error code object
        posts = { code: 404 };
        // pass to error handler
        next(posts);
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
  let newPost = req.body;
  newPost.id = req.params.id;
  if (!newPost.title || !newPost.content) {
    newPost.code = 406;
    next(newPost);
  } else {
    helpers
      .putPost(newPost)
      .then(count => {
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
