const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'encrypt key' }));
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

    req.session.name = name;
    req.session.age = age;

    res.redirect('/output');
});

app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;

    if (!name) name = 'person';
    if (!age) age = undefined;

    res.send(`Welcome ${name}, with age ${age}`);
});

app.listen(3000, () => {
    console.log('Server running on PORT 3000....');
});