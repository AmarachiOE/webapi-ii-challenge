const express = require("express");

const posts = require("./db");

const router = express.Router();


// url begins with /api/posts

// GET ALL POSTS ==================
router.get("/", (req, res) => {
  posts
    .find()
    .then(posts => {
      res.status(200).json({
        compliment: process.env.COMPLIMENT,
        posts});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
    });
});

// GET POST BY ID ==================
// be specific with conditions bc for this case if the post doesn't exists then an empty array will be returned
// if (post.length == 0 || post === undefined)...
// or if (post.length > 0)...
router.get("/:id", (req, res) => {
  const postId = req.params.id;
  posts
    .findById(postId)
    .then(post => {
      if (post.length == 0 || post === undefined) {
        res
          .status(404)
          .json({ error: "The post with the specified ID does not exist." });
      } else {
        res.status(200).json(post);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

// GET POST BY ID LUIS EXAMPLE ===========
/*
router.get("/:id", async (req, res) => {
    try {
      const post = await posts.findById(req.params.id);
  
      if (post.length > 0 ) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: "Error retrieving the post"
      });
    }
  });

*/

// POST ==================
router.post("/", (req, res) => {
  const newPost = req.body;
  console.log("Request Body: ", newPost);
  if (!newPost.title || !newPost.contents) {
    res
      .status(400)
      .json({ error: "Please provide title and contents for the post." });
  } else {
    posts
      .insert(newPost)
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the post to the database."
        });
      });
  }
});

// DELETE ==================
router.delete("/:id", (req, res) => {
  const postId = req.params.id;
  posts
    .remove(postId)
    .then(post => {
      if (post) {
        res.status(204).end();
      } else {
        res
          .status(404)
          .json({ error: "The post with the specified ID does not exist." });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The post could not be removed"
      });
    });
});

// PUT ==================
router.put("/:id", (req, res) => {
  const postId = req.params.id;
  const postInfo = req.body;
  if (!postInfo.title || !postInfo.contents) {
    res
      .status(400)
      .json({ error: "Please provide title and contents for the post." });
  } else {
    posts
      .update(postId, postInfo)
      .then(post => {
        if (post) {
          res.status(200).json(post);
        } else {
          res
            .status(404)
            .json({ error: "The post with the specified ID does not exist." });
        }
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: "The post information could not be modified." });
      });
  }
});

module.exports = router;
