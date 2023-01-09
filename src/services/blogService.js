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
        const newBlog = Blog.createBlog(blog);
        return newBlog;
    },
    updateBlog: (id, blog) => {
        return;
    },
    deleteBlog: (id) => {
        return;
    }
};

module.exports = blogService;