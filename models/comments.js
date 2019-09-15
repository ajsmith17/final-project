const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    name: String,
    comment: String
})

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;
