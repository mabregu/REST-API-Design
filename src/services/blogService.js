const Blog = require('../database/Blog');
const blogService = {
    getAllBlogs: () => {
        try {
            const blogs = Blog.getAllBlogs();
            return blogs;
        } catch (error) {
            throw error;
        }
    },
    getBlogById: (id) => {
        try {
            const blog = Blog.getBlogById(id);
            return blog;
        } catch (error) {
            throw error;
        }
    },
    createBlog: (blog) => {
        try {
            const newBlog = Blog.createBlog(blog);
            return newBlog;
        } catch (error) {
            throw error;
        }
    },
    updateBlog: (id, blog) => {
        try {
            const updatedBlog = Blog.updateBlog(id, blog);
            return updatedBlog;
        } catch (error) {
            throw error;
        }
    },
    deleteBlog: (id) => {
        try {
            const deletedBlog = Blog.deleteBlog(id);
            return deletedBlog;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = blogService;