const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
    id: Number,
    title: String,
    tag: String,
    date: String,
    content: String
})

var Blog = mongoose.model('Blog', schema);

module.exports = Blog;
