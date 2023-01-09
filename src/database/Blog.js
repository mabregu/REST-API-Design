const DB = require('./db');

const getAllBlogs = () => {
    return DB.blogs;
};

module.exports = {
    getAllBlogs
};