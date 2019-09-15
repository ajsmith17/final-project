// ================
//    Dependencies
// ================
const express = require('express');
const router = express.Router();
const Comments = require('../models/comments.js');
const mongoose = require('mongoose');
// ================
//    Routes
// ================
// Index route
router.get('/', (req, res) => {
  Comments.find({}, (err, foundComments) => {
    res.json(foundComments);
  });
});
// Create Route
router.post('/', (req, res) => {
  Comments.create(req.body, (err, addedComment) => {
    res.json(addedComment);
  });
});

module.exports = router;
