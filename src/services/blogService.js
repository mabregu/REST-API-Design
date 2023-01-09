const Blog = require('../database/Blog');
const blogService = {
    getAllBlogs: () => {
        const blogs = Blog.getAllBlogs();
        return blogs;
    },
    getBlogById: (id) => {
        return;
    },
    createBlog: (blog) => {
        return;
    },
    updateBlog: (id, blog) => {
        return;
    },
    deleteBlog: (id) => {
        return;
    }
};

module.exports = blogService;