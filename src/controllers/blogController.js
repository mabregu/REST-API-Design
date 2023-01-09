const blogService = require('../services/blogService');
const blogController = {
    getAllBlogs: (req, res) => {
        const blogs = blogService.getAllBlogs();
        res.send({
            status: "success",
            data: blogs
        });
    },
    getBlogById: (req, res) => {
        const blog = blogService.getBlogById(req.params.id);
        res.send(blog);
    },
    createBlog: (req, res) => {
        const blog = blogService.createBlog(req.body);
        res.send(blog);
    },
    updateBlog: (req, res) => {
        const blog = blogService.updateBlog(req.params.id, req.body);
        res.send(blog);
    },
    deleteBlog: (req, res) => {
        const blog = blogService.deleteBlog(req.params.id);
        res.send(blog);
    }
};

module.exports = blogController;