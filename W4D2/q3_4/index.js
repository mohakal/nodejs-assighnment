const express = require('express');
const session = require('express-session');
const path = require('path');
const Product = require('./model/Product');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'encrypt key' }));

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

app.post('/add_to_cart', function(req, res) {
    if (!req.session.cart) {
        req.session.cart = [];
    }

    let product = req.session.cart.filter(
        function(elem, i, array) { return elem.name === req.body.name; }
    );

    if (product.length == 0) {
        req.session.cart.push({
            pictureUrl: req.body.picture_url,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            quantity: 1
        });
    } else {
        product[0].quantity = product[0].quantity + 1;
    }

    res.redirect('/shoppingcart');
});

app.get('/shoppingcart', (req, res) => {
    let products = req.session.cart;

    if (!products) {
        products = [];
    }
    
    res.render('shoppingcart', { products: products });
});

app.listen(3000, () => {
    console.log('Server running....');
});