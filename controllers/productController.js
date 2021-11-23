// Import router package
const router = require("express").Router();
const productService = require("../services/productService.js");

/* Handle get requests for '/'
/* this is the index or home page
*/
router.get("/", function (req, res) {
  // Get all products
  try {
    // call the service
    const result = productService.getProducts();

    // Send response back to client
    res.json(result);

    // Catch and send errors
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// Endpoint to handle requests for product by id
// req.params version (prefered)
// req format: /product/1
//
router.get("/:id", (req, res) => {
  // read values from req
  const id = req.params.id;

  // If params are missing return 400
  if (typeof id === "undefined") {
    res.statusMessage = "Bad Request - missing id";
    res.status(400).json({ content: "error" });
  }

  try {
    // Call the service
    const result = productService.getProductById(id);

    // Send response back to client
    res.json(result);

    // Catch and send errors
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }
});

// Endpoint to handle requests for product by id
// req.query version
// req format: /product/byid?id=1
//
router.get("/bycat/:catId", (req, res) => {
  // read values from req
  const catId = req.params.catId;

  // If params are missing return 400
  if (typeof catId === "undefined") {
    res.statusMessage = "Bad Request - missing cat id";
    res.status(400).json({ content: "error" });
  }
  // Get product
  try {
    const result = productService.getProductsByCatId(catId);

    // Send response back to client
    res.json(result);

    // Catch and send errors
  } catch (err) {
    res.status(500);
    res.send(err.message);
  }

});

// export
module.exports = router;
