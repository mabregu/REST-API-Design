const DB = require('./db');
const saveToDatabase = require('./utils');
const getAllBlogs = () => {
    return DB.blogs;
};

const createBlog = (blog) => {
    let isBlogExist = DB.blogs.find((b) => b.id === blog.id);
    
    if (isBlogExist) {
        return;
    }
    
    DB.blogs.push(blog);
    
    saveToDatabase(DB);
    
    return blog;
};

module.exports = {
    getAllBlogs,
    createBlog
};