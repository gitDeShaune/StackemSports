const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	name: { type:String,required: true,},
	age:{ type: Number, required: true}, 
	username: {type:String,required: true,},  
	
	});
	
	


const UserModel = mongoose.model("users", UserSchema)
//if 'users' isnt alreay in databse sytem, it will be created
module.exports = UserModel;