const express = require('express');
const router = express.Router();

router
    .get('/', (req, res) => {
        res.send('Get all blogs');
    })
    .get('/:id', (req, res) => {
        res.send(`Get blog with id ${req.params.id}`);
    })
    .post('/', (req, res) => {
        res.send('Create a new blog');
    })
    .put('/:id', (req, res) => {
        res.send(`Update blog with id ${req.params.id}`);
    })
    .delete('/:id', (req, res) => {
        res.send(`Delete blog with id ${req.params.id}`);
    });
;

module.exports = router;