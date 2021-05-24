const mongoose = require('mongoose')



const blogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    snippet:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
 
}, { timestamps: true })    

const Blogs = mongoose.model('Blog', blogSchema)

module.exports = Blog;
