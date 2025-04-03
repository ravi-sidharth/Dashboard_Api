require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToMongoDB = require('./db/connectToMongoDb')
const userRouter = require('./router/user-routes')
const taskRouter = require('./router/product-route')

const app = express()
const PORT = process.env.PORT || 3000 

// MongoDb connection
connectToMongoDB()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter)
app.use('/api/product',taskRouter)

app.listen(PORT,()=>console.log(`Server running at PORT:${PORT}`))

