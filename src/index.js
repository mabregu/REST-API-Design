const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Routes for v1
const v1Blogs = require('./v1/routes/blogRoutes');

app.get('/', (req, res) => {
    res.send('It works!');
});

app.use('/api/v1/blogs', v1Blogs);

app.listen(PORT, () => {
    console.log(`Server listening in http://localhost:${PORT}`);
});