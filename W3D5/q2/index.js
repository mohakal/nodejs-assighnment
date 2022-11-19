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
    let name = req.body.name;
    let age = req.body.age;

    if (!name) name = 'person';
    if (!age) age = undefined;

    res.send(`Welcome ${name}, with age ${age}`);
});

app.listen(3000, () => {
    console.log('Server Running....');
});