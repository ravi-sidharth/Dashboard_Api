const {Product} = require('../model/product-model')

const getAllProducts = async(req,res)=>{
  try {
      const products = await Product.find({})
      res.status(200).json({
          success:true,
          message:"Successfully fetch all users tasks!",
          products
      })
  } catch(err) {
      return res.status(500).json({
          success:false,
          message:err.message
      })
  }
}

const addProduct = async(req,res)=>{
    try {   
        const {title,description,price,imageUrl} = req.body
        const product = await Product.insertOne({title,description,price,imageUrl})
        res.status(200).json({
            success:true,
            message:"Successfully fetched all tasks!",
            product
        })
    } catch(err) {
        console.log(err)
        return res.status(500).json({
            success:false,
            message:err.message
        })
    }
}


module.exports = {
    addProduct,
    getAllProducts
}