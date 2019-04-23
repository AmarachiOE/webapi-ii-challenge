const express = require("express");

const Posts = require("./db");

const router = express.Router();

// url begins with /api/posts

// GET ==================
router.get("/", (res, req) => {

});

// GET BY ID ==================
router.get("/:id", (res, req) => {

});

// POST ==================
router.post("/", (res, req) => {

});


// DELETE ==================
router.delete("/:id", (res, req) => {

});


// PUT ==================
router.get("/:id", (res, req) => {

});


module.exports = router;