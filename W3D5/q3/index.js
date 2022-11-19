const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, 'static', 'css')));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let date = new Date();
    let hour = date.getHours();

    let css = {
        url: ''
    };

    if (hour >= 6 && hour < 12)
        css.url = '/css/day.css';
    else
        css.url = '/css/night.css';

    res.render('index', css);
});

app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    if (!name) name = 'person';
    if (!age) age = undefined;

    res.send(`Welcome ${name}, with age ${age}`);
});

app.listen(3000, () => {
    console.log('Server listening on PORT 3000....');
});