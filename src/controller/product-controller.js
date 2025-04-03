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
        // const products = [
        //     {
        //       "title": "Wireless Headphones",
        //       "description": "Noise-canceling over-ear headphones with Bluetooth connectivity.",
        //       "price": 129.99,
        //       "imageUrl": "https://example.com/images/headphones.jpg"
        //     },
        //     {
        //       "title": "Smartwatch Series 5",
        //       "description": "A fitness tracker with heart rate monitoring and GPS.",
        //       "price": 199.99,
        //       "imageUrl": "https://example.com/images/smartwatch.jpg"
        //     },
        //     {
        //       "title": "Gaming Mouse",
        //       "description": "Ergonomic gaming mouse with customizable RGB lighting.",
        //       "price": 49.99,
        //       "imageUrl": "https://example.com/images/gamingmouse.jpg"
        //     },
        //     {
        //       "title": "4K LED Monitor",
        //       "description": "27-inch ultra HD monitor with high refresh rate.",
        //       "price": 349.99,
        //       "imageUrl": "https://example.com/images/monitor.jpg"
        //     },
        //     {
        //       "title": "Mechanical Keyboard",
        //       "description": "RGB backlit mechanical keyboard with blue switches.",
        //       "price": 89.99,
        //       "imageUrl": "https://example.com/images/keyboard.jpg"
        //     },
        //     {
        //       "title": "Portable Speaker",
        //       "description": "Waterproof Bluetooth speaker with deep bass.",
        //       "price": 59.99,
        //       "imageUrl": "https://example.com/images/speaker.jpg"
        //     },
        //     {
        //       "title": "Smartphone Gimbal",
        //       "description": "3-axis handheld gimbal stabilizer for smooth videos.",
        //       "price": 119.99,
        //       "imageUrl": "https://example.com/images/gimbal.jpg"
        //     },
        //     {
        //       "title": "Wireless Charger",
        //       "description": "Fast-charging pad compatible with iPhone and Android.",
        //       "price": 39.99,
        //       "imageUrl": "https://example.com/images/charger.jpg"
        //     },
        //     {
        //       "title": "Laptop Backpack",
        //       "description": "Water-resistant backpack with USB charging port.",
        //       "price": 45.99,
        //       "imageUrl": "https://example.com/images/backpack.jpg"
        //     },
        //     {
        //       "title": "Action Camera",
        //       "description": "4K action camera with waterproof case and accessories.",
        //       "price": 179.99,
        //       "imageUrl": "https://example.com/images/actioncamera.jpg"
        //     }
        //   ]
          
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