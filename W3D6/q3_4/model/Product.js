class Product {

    constructor(pictureUrl, name, price, description, quantity = 0) {
        this._pictureUrl =  pictureUrl;
        this._name = name;
        this._price = price;
        this._description = description;
        this._quantity = quantity;
    }

    get pictureUrl() {
        return this._pictureUrl;
    }

    get name() {
        return this._name;
    }
    
    get price() {
        return this._price;
    }
    
    get description() {
        return this._description;
    }
    
    get quantity() {
        return this._quantity;
    }
}

module.exports = Product;