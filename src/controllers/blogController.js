const { v4: uuidv4 } = require('uuid');
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
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).send({
                status: "error",
                message: "Id is required"
            });
        }
        
        const blog = blogService.getBlogById(id);
        
        if (!blog) {
            return res.status(404).send({
                status: "error",
                message: "Blog not found"
            });
        }
        
        res.send({
            status: "success",
            data: blog
        });
    },
    createBlog: (req, res) => {
        const { body } = req;
        // TODO: Validate body with express-validator
        if (!body.title || !body.content) {
            return res.status(400).send({
                status: "error",
                message: "Title and content are required"
            });
        }
        
        const blog = {
            id: uuidv4(),
            title: body.title,
            content: body.content,
            author: body.author,
            date: new Date(),
            comments: body.comments,
            tags: body.tags,
            category: body.category,
            images: body.images,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const newBlog = blogService.createBlog(blog);
        
        res.send({
            status: "success",
            data: newBlog
        });
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