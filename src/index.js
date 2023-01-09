const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// Routes for v1
const v1 = require('./v1/routes');

app.get('/', (req, res) => {
    res.send('It works!');
});

app.use('/api/v1', v1);

app.listen(PORT, () => {
    console.log(`Server listening in http://localhost:${PORT}`);
});