const express = require('express');
const router = express.Router();

const blogController = require('../../controllers/blogController');

router
    .get('/', blogController.getAllBlogs)    
    .get('/:id', blogController.getBlogById)
    .post('/', blogController.createBlog)
    .put('/:id', blogController.updateBlog)
    .delete('/:id', blogController.deleteBlog)
;

module.exports = router;