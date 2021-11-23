// Dependencies
// require the database connection
const { dbConn } = require('../database/db.js');

// Define SQL statements here for use in function below
// These are parameterised queries.
// Input parameters are parsed and set before queries are executed

// Parameterised Queries
const SQL_PRODUCT_ALL = 'SELECT * FROM product ORDER BY product_name ASC;';
const SQL_PRODUCT_BYID = 'SELECT * FROM product WHERE _id = ?;';
const SQL_PRODUCT_BY_CATID = 'SELECT * FROM product WHERE category_id = ? ORDER BY product_name ASC;'; 

// Get all products from DB
//
function getProducts() {

    // define variable to store products
    let products;

    // execute SQL
    // Note await in try/catch block
    try {
        // Execute the SQL
        const result = dbConn.prepare(SQL_PRODUCT_ALL)
        
        // first element of the recordset contains products
        products = result.all();

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get all products: ', err.message);
    } finally {

    }
    // return all products found
    return products;
}

// better-sqlite params
// https://github.com/JoshuaWise/better-sqlite3/blob/master/docs/api.md#allbindparameters---array-of-rows

// Get product by id from DB
//
function getProductById(id) {
    let product;

    // execute SQL
    // Note await in try/catch block
    try {
        // Execute the SQL
        const result = dbConn.prepare(SQL_PRODUCT_BYID)
        
        // set id parameter value
        product = result.get(id);

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get all products: ', err.message);
    } finally {

    }
    // return a single product if found
    return product;
}

// Get all products from DB
//
function getProductsByCatId(catId) {

    // define variable to store products
    let products;

    // execute SQL
    // Note await in try/catch block
    try {
        // Execute the SQL
        const result = dbConn.prepare(SQL_PRODUCT_BY_CATID)
        
        // first element of the recordset contains products
        products = result.all(catId);

    // Catch and log errors to server side console 
    } catch (err) {
        console.log('DB Error - get all products: ', err.message);
    } finally {

    }
    // return all products found
    return products;
}


// Export 
module.exports = {
    getProducts,
    getProductById,
    getProductsByCatId
};
