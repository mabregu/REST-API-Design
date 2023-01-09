const blogController = {
    getAllBlogs: (req, res) => {
        res.send('Get all blogs');
    },
    getBlogById: (req, res) => {
        res.send(`Get blog with id ${req.params.id}`);
    },
    createBlog: (req, res) => {
        res.send('Create a new blog');
    },
    updateBlog: (req, res) => {
        res.send(`Update blog with id ${req.params.id}`);
    },
    deleteBlog: (req, res) => {
        res.send(`Delete blog with id ${req.params.id}`);
    }
};

module.exports = blogController;