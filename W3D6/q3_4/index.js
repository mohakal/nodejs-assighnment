const express = require('express');
const path = require('path');
const Product = require('./model/Product');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, 'static', 'css')));
app.use('/image', express.static(path.join(__dirname, 'static', 'image')));

app.set('view engine', 'ejs');

app.get('/products', (req, res) => {
    let products = [];
    
    products.push(
        new Product('/image/1.jpg', 'Iphone 14 pro max', 2000, 'A magical new way to interact with iPhone.' +
         'Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail.'
          + ' All powered by the ultimate smartphone chip.')
    );
    products.push(
        new Product('/image/2.jpg', 'Samsung Galaxy A53', 750, '6.5" Super AMOLED Screen, 6GB/128GB Memory,' +
         ' 64MP Quad Camera, 5000 mAh Battery, Android 12 - Black')
    );
    products.push(
        new Product('/image/3.jpg', 'Infinix Hot 11S', 550, '6.7" IPS LCD Screen, 4GB/64GB Memory,' +
         ' 50MP Triple Camera, 5000 mAh Battery, Android 11 - Green Wave')
    );
    products.push(
        new Product('/image/4.jpg', 'Infinix Zero X Pro', 550, '8GB/256GB Memory -Tuscan Brown')
    );

    res.render('product', { products: products });
});

app.get('/shoppingcart', (req, res) => {
    let products = [];
    
    products.push(
        new Product('/image/1.jpg', 'Iphone 14 pro max', 2000, 'A magical new way to interact with iPhone.' +
         'Groundbreaking safety features designed to save lives. An innovative 48MP camera for mind-blowing detail.'
          + ' All powered by the ultimate smartphone chip.', 2)
    );
    products.push(
        new Product('/image/2.jpg', 'Samsung Galaxy A53', 750, '6.5" Super AMOLED Screen, 6GB/128GB Memory,' +
         ' 64MP Quad Camera, 5000 mAh Battery, Android 12 - Black', 4)
    );
    products.push(
        new Product('/image/3.jpg', 'Infinix Hot 11S', 550, '6.7" IPS LCD Screen, 4GB/64GB Memory,' +
         ' 50MP Triple Camera, 5000 mAh Battery, Android 11 - Green Wave', 2)
    );
    products.push(
        new Product('/image/4.jpg', 'Infinix Zero X Pro', 550, '8GB/256GB Memory -Tuscan Brown', 1)
    );

    res.render('shoppingcart', { products: products });
});

app.listen(3000, () => {
    console.log('Server running....');
});