// require the database connection
const productRepository = require('../repositories/productRepository.js');

// for documentation see: https://www.npmjs.com/package/validator
const validator = require('validator');

// functio to validate an id
// An id is a positive number with no sign (+,-, etc.)
// return Not a number or else cast as Number and return
//
function validateId(num) {
    if (validator.isNumeric(num, { no_symbols: true })) {
        return Number(num);
    }
    return NaN;
}

// Function to get all products
//
function getProducts() {
    // Call the repository function to get all products
    const products = productRepository.getProducts();

    // return products
    return products;
}

// Function to get product by id
//
function getProductById(id) {
    // validate the id
    if (validateId(id, { no_symbols: true })) {
        // Call the repository function to get product matching id
        const product = productRepository.getProductById(id);

        // return the product
        return product;
    } else {
        return "Invalid product id";
    }
}


// Function to get product by id
//
function getProductsByCatId(id) {
    // validate the id
    if (validateId(id, { no_symbols: true })) {
        // Call the repository function to get product matching id
        const products = productRepository.getProductsByCatId(id);

        // return the product
        return products;
    } else {
        return "Invalid category id";
    }
}


// Module exports
// expose these functions
module.exports = {
    getProducts,
    getProductById,
    getProductsByCatId
}