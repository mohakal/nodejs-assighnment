const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/cookie', function(req, res) {
    res.render('cookie', {cookies: req.cookies});
});

app.post('/cookie', function(req, res) {
    res.cookie(req.body.key, req.body.value, {maxAge: 1000 * 60 * 60 * 24});

    res.redirect('/cookie');
});

app.listen(3000, function() {
    console.log('Server running....');
});