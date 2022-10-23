const express = require('express')
const cors = require('cors')
const route = express.Router()
const app =express()

const ProductsController =  require('../controllers/products');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(cors({ origin: '*', credentials: true }))
app.use(allowCrossDomain)

route.post('/api/products/create', ProductsController.createProduct)
route.get('/api/products/allProducts', ProductsController.allProducts)
route.get('/api/products/getProductById/:productId', ProductsController.getProductById)
route.delete('/api/products/deleteProductById/:productId', ProductsController.deleteProductById)
route.patch('/api/products/editProduct/:productId', ProductsController.updateProductById)





// prefix 

module.exports = route