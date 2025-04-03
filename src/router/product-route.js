const {Router} = require('express')
const {addProduct,getAllProducts } = require('../controller/product-controller')

const route = Router()

route.post('/add-product',addProduct)
route.get('/get-products', getAllProducts)

module.exports = route