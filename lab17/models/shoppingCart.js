class ShoppingCart {
    constructor() {
        this.products = [];
    }

    async addToCart(productId) {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const addProduct = await response.json(); 

        this.products.push(addProduct);
    }

    getCartProducts() {
        return this.products;
    }
}

module.exports = new ShoppingCart();