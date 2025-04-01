const mongoose = require('mongoose')

const connectToMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected successfully!')
    } catch(err) {
        console.error("Error occured while connecting database",err)
    }
}

module.exports = connectToMongoDB