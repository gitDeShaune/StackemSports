const mongoose = require('mongoose')
//all the sports schemsas are the same,  but they are not in the same group so that there's
//not too much strain for the queries

const lolSchema = new mongoose.Schema({
	prop_title: { type:String,required: true,},
	name: { type:String,required: true,},
	team:{ type: String, required: true,}, 
	lfg_opps: {type: [String],required: true,},  
	lfg_dates: {type: [String],required: true,},  
	lfg_stats: {type: [Number],required: true,}, 	
	position: {type: String,required: true,},    
	last_season_stats: {type: [String],required: true,}, 
	});
	
	
const lolModel = mongoose.model("lols", lolSchema)

//had to do 'nbas' for some reason; supposed to be convention, but was only working method as well
module.exports = lolModel;

//position or height