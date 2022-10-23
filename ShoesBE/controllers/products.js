const Products = require("../models/products");

// Create product
const createProduct = async (req, res, next) => {
  try {
    const {
      productName,
      productBrand,
      type,
      price,
      discount,
      quantity,
      images,
    } = req.body;
    if (
      !productName ||
      !productBrand ||
      !type ||
      !price ||
      !discount ||
      !quantity ||
      !images
    ) {
      res.status(400).json({
        message: "Some fields are not emty",
      });
    }
    const product = await new Products(req.body);
    // product.save();
    product.save().then((response) => {
        res.json({
          message: 'Added product successfully!',
        })
      })
  } catch (error) {
    console.log(error);
    res.status(400).json({
      statusCode: 400,
      message: 'bad request',
    })
  }
};

// RED - GET || POST 
// get all products

const allProducts = async(req, res, next) => {
  try {
    const allProducts = await Products.find();
    if (allProducts.length > 0) {
      res.status(200).json({
        products: allProducts.reverse(),
      })
    }else {
      res.status(200).json({
        message: 'No results',
        products: [],
      })
    }
  } catch (error){
    console.log('error: ', error)
    res.status(400).json({
      message: ' Bad request'
    })
  }
}
// get by id 

const getProductById = async(req, res, next) => {
  const productId = req.params.productId
  try {
    const product = await Products.findById(productId);
    if (product) {
      res.status(200).json({
        statusCode: 200,
        product,
      })
    }else {
      res.status(204).json({
        statusCode: 204,
        message: 'This product Ud  have not in the databasse',
        products: {},
      })
    }
  } catch (error){
    console.log('error: ', error)
    res.status(400).json({
      message: ' Bad request'
    })
  }
}
// DELETE product  by id 
const deleteProductById = async(req, res, next) => {
  const productId = req.params.productId
  try {
    const product = await Products.findByIdAndRemove(productId);
    if (product) {
      res.status(200).json({
        statusCode: 200,
        message: ' Deleted product successfully',
        
      })
      res.status(204).json({
        statusCode: 204,
        message: 'This product ID  have not in the databasse',
      })
    }else {
    }
  } catch (error){
    console.log('error: ', error)
    res.status(400).json({
      message: ' Bad request'
    })
  }
}

// UPDATE PATCH || PUT 

const updateProductById = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    console.log(req.body);
    if (Object.keys(req.body).length === 0) {
       return res.status(400).json({
        statusCode: 400,
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



module.exports = { createProduct, allProducts, getProductById, deleteProductById, updateProductById };