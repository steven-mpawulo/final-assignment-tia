require('dotenv').config();
const express = require('express');
const movieRoute = require('./routes/movieRoute');
const app = express();

const port = process.env.PORT || 8001;

app.use(express.json());
app.use('/api/', movieRoute);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
    res.json({"message": "welcome to my server"});
});
app.listen(port, () => {
    console.log(`server has started at http://localhost:${port}/`);
});