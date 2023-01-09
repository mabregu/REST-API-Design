const DB = require('./db');
const saveToDatabase = require('./utils');

const getAllBlogs = (filterParams) => {
    try {
        const blogs = DB.blogs;

        if (filterParams.title) {
            return blogs.filter((blog) => blog.title.toLowerCase().includes(filterParams.title.toLowerCase()));
        }
        
        return blogs;
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
};

const getBlogById = (id) => {
    try {
        const blog = DB.blogs.find((b) => b.id == id);
        if (!blog) return;
        
        return blog;
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
};

const createBlog = (blog) => {
    try {
        let isBlogExist = DB.blogs.find((b) => b.id == blog.id);
        
        if (isBlogExist) return;
        
        DB.blogs.push(blog);
        
        saveToDatabase(DB);
        
        return blog;
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
};

const updateBlog = (id, blogChanges) => {
    try {
        let isBlogExist = DB.blogs.find((b) => b.id == id);
        
        if (!isBlogExist) return;
        
        const updatedBlog = {
            ...isBlogExist,
            ...blogChanges,
            updatedAt: new Date()
        };
        
        const blogIndex = DB.blogs.findIndex((b) => b.id == id);
        
        DB.blogs[blogIndex] = updatedBlog;
        
        saveToDatabase(DB);
        
        return updatedBlog;
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
};

const deleteBlog = (id) => {
    try {
        let isBlogExist = DB.blogs.find((b) => b.id == id);
        
        if (!isBlogExist) return;
        
        const blogIndex = DB.blogs.findIndex((b) => b.id == id);
        
        DB.blogs.splice(blogIndex, 1);
        
        saveToDatabase(DB);
        
        return isBlogExist;
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        }
    }
};

module.exports = {
    getAllBlogs,
    createBlog,
    getBlogById,
    updateBlog,
    deleteBlog
};