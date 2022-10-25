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

app.get('/course/:id', (req, res) => {
	 const id = req.params.id;
    const course = coursesData.find(n => n.id == id);
    res.send(course);
})


app.listen(port, () => {
    console.log(`News Server Running on Port: ${ port }`)
})
