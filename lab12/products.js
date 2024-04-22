class Products {
    constructor() { 
        this.init()
    }

    async init() {
        try {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            this.products = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    getProducts() {
        return this.products;
    }
}

module.exports = new Products();