const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let name = req.query.name;
    let age = req.query.age;

    if (!name) name = 'person';
    if (!age) age = undefined;

    res.send(`Welcome ${name}, with age ${age}`);
});

app.listen(3000, () => {
    console.log('Server running....');
});