const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

const coursesData = require('./data/courses-data.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send("News API Running!");
})

app.get('/courses', (req, res) => {
    res.send(coursesData);
})


app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    if (id === '08') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})


app.listen(port, () => {
    console.log(`News Server Running on Port: ${ port }`)
})
