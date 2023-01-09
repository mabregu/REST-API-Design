const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`It works from ${req.baseUrl}!`);
});

module.exports = router;