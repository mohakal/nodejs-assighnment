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

    let data = {
        url: '',
        time: hour
    };

    if (hour >= 6 && hour < 12)
        data.url = '/css/day.css';
    else
        data.url = '/css/night.css';

    res.render('index', data);
});

app.listen(3000, () => {
    console.log('Server running....');
});