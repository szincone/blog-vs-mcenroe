"use strict";

const express = require("express");
const helpers = require("../db/dbHelper/");
const router = express.Router();

// start gets
router.get("/", (req, res) => {
  helpers
    .getPosts()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "Error retrieving posts information." });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  helpers
    .getPost(id)
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "Error retrieving posts information." });
    });
});
// end gets

// start delete
router.delete("/:id", (req, res) => {
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
      res.status(500).json({ error: "The post could not be removed." });
    });
});
// end delete

// start put
router.put("/:id", (req, res) => {
  const newPost = req.body;
  if (!newPost.title || !newPost.content) {
    return res.status(406).json({
      errorMessage: "Please provide a title and content for the post.",
    });
  } else {
    helpers
      .putPost(newPost)
      .then(posts => {
        res.status(200).json({ message: "Post successfully modified." });
      })
      .catch(err => {
        res.status(500).json({ error: "The post could not be updated." });
      });
  }
});
// end put

// start post
router.post("/", (req, res) => {
  const post = req.body;
  // gets time of post and sets it
  const newTime = new Date();
  post.time_stamp = newTime;
  if (!post.title || !post.content) {
    return res.status(406).json({
      errorMessage: "Please provide a name for the post.",
    });
  } else {
    helpers
      .addPost(post)
      .then(posts => {
        res.status(201).json({ message: "Post successfully added." });
      })
      .catch(err => {
        res.status(500).json({ error: "The post could not be added." });
      });
  }
});
// end post

module.exports = router;
