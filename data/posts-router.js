const express = require("express");

const posts = require("./db");

const router = express.Router();

// url begins with /api/posts

// GET ALL POSTS ==================
router.get("/", (req, res) => {
  posts
    .find()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: "The posts information could not be retrieved." });
    });
});

// GET POST BY ID ==================
router.get("/:id", (req, res) => {});

// POST ==================
router.post("/", (req, res) => {});

// DELETE ==================
router.delete("/:id", (req, res) => {});

// PUT ==================
router.get("/:id", (req, res) => {});

module.exports = router;
