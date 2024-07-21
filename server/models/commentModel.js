const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({

	txt: { type:String,required: true,},	
	
	});
	
	
const commentModel = mongoose.model("comments", commentSchema)

//had to do 'nbas' for some reason; supposed to be convention, but was only working method as well
module.exports = commentModel;	