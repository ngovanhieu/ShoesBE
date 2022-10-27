const Joi = require('joi')

const addProductSchema = Joi.object({
    productName: Joi.string().min(5).max(100).required(),
    productBrand:  Joi.string().required(),
    type: Joi.string().required(),
    info: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number(),
    quantity: Joi.number().required(),
    images: Joi.array().items(Joi.string().required()),
})

const checkUserSchema = Joi.object({
    userName: Joi.string().min(5).max(30).required(),
    passWord: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    firstName: Joi.string().min(2).max(100).required(),
    lastName: Joi.string().min(2).max(100).required(),
    phone: Joi.number().required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(10).max(200).required(),
    avt: Joi.string(),
  });
module.exports = {addProductSchema, checkUserSchema}