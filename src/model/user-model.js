const {Schema,model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type:String,
        trim :true,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    loginCount: { type: Number, default: 0 },
    signupCount: { type: Number, default: 0 },
    logoutCount: { type: Number, default: 0 },
},
{ timestamps:true}
)

const User = model('User',userSchema)

module.exports = {
    User
}