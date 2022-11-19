const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/result', (req, res) => {
    let data = {
        name: req.body.name,
        age: req.body.age
    }

    if (!data.name) data.name = 'person';
    if (!data.age) data.age = undefined;

    res.render('result', data);
});

app.listen(3000, () => {
    console.log('Server Running....');
});