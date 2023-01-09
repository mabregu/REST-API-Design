const { v4: uuidv4 } = require('uuid');
const blogService = require('../services/blogService');
const blogController = {
    getAllBlogs: (req, res) => {
        const { title } = req.query;
        
        try {
            const blogs = blogService.getAllBlogs({ title });
            res.send({
                status: "success",
                data: blogs
            });
        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "Something went wrong"
            });
        }
    },
    getBlogById: (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({
                status: "error",
                message: "Id is required"
            });
        }
        
        try {
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
        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "Something went wrong"
            });
        }
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

        try {
            const newBlog = blogService.createBlog(blog);
            
            res.send({
                status: "success",
                data: newBlog
            });
        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "Something went wrong"
            });
        }
    },
    updateBlog: (req, res) => {
        const { id } = req.params;
        const { body } = req;
        
        if (!id) {
            return res.status(400).send({
                status: "error",
                message: "Id is required"
            });
        }
        
        try {
            const blog = blogService.updateBlog(id, body);
            
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
        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "Something went wrong"
            });
        }
    },
    deleteBlog: (req, res) => {
        const { id } = req.params;
        
        if (!id) {
            return res.status(400).send({
                status: "error",
                message: "Id is required"
            });
        }
        
        try {
            const blog = blogService.deleteBlog(id);
            
            if (!blog) {
                return res.status(404).send({
                    status: "error",
                    message: "Blog not found"
                });
            }
            
            res.send({
                status: "success",
            });
        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "Something went wrong"
            });
        }
    }
};

module.exports = blogController;