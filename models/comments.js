const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema({
    name: String,
    comment: String
},
{
  timestamps: true
});

const Comments = mongoose.model('Comments', commentSchema);

module.exports = Comments;
