require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 8001;

app.get('/', (req, res) => {
    res.json({"message": "welcome to my server"});
});
app.listen(port, () => {
    console.log(`server has started at http://localhost:${port}/`);
});