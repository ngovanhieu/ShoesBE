const Products = require("../models/products");
const productSchema = require('../helpers/validation')
// Create product
const createProduct = async (req, res, next) => {
  try {
   const valiReq = await productSchema.addProductSchema.validateAsync(req.body)
    const product = new Products(valiReq);
    console.log(product);
    product.save().then(
      res.status(200).json({
        message: "Added product successfully!",
      })
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Bad request.",
      errorMessage: error.details[0].message,
      statusCode: 400
    });
  }
};

// Get all product
const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Products.find();
    if (Products.length > 0) {
      res.status(200).json({
        products: allProducts.reverse(),
      });
    } else {
      res.status(200).json({
        message: "No results",
        products: [],
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Bad request",
    });
  }
};

// get product by id
const getProductById = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Products.findById(productId);
    if (product) {
      res.status(200).json({
        statusCode: 200,
        product,
      });
    } else {
      res.status(204).json({
        statusCode: 204,
        message: "Product does not exist in the database",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Bad request",
    });
  }
};

//delete product by id
const deleteProductById = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const product = await Products.findByIdAndRemove(productId);
    if (product) {
      res.status(200).json({
        statusCode: 200,
        message: "Deleted product successfuly",
      });
    } else {
      res.status(200).json({
        statusCode: 204,
        message: "Product does not exist in the database",
      });
    }
  } catch (error) {
    res.status(400).json({
      statusCode: 400,
      message: "Bad request",
    });
  }
};

//update product by id
const updateProductById = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
       return res.status(400).json({
        statusCode: 403,
        message: "Body request can not empty.",
      });
    }
    Products.findByIdAndUpdate(productId, req.body).then((data) => {
      if (data) {
        res.status(200).json({
          statusCode: 200,
          message: "Updated product successfuly!",
        });
      } else {
        res.status(200).json({
          statusCode: 404,
          message: "Product does not exist in the database",
        });
      }
    });
  } catch (error) {
    res.status(400).json({
      message: "Bad request",
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProductById,
  updateProductById,
};
