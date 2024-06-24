const mongoose = require('mongoose')
//all the sports schemsas are the same,  but they are not in the same group so that there's
//not too much strain for the queries

const mlbSchema = new mongoose.Schema({
	prop_title: { type:String,required: true,},
	name: { type:String,required: true,},
	team:{ type: String, required: true}, 
	lfg_opps: {type: [String],required: true,},  
	lfg_dates: {type: [String],required: true,},  
	lfg_stats: {type: [Number],required: true,}, 
	position: {type: String,required: true,},    
	last_season_stats: {type: [String],required: true,}, 	
	
	});
	
	
const mlbModel = mongoose.model("mlbs", mlbSchema)

//had to do 'nbas' for some reason; supposed to be convention, but was only working method as well
module.exports = mlbModel;	

/*lfg_opps: {type: [String],required: true,},  
	lfg_dates: {type: [String],required: true,},  
	lfg_stats: {type: [String],required: true,}, 
	
	*/
	
/* WHY THE COLLECTION is pluralized name

It's worth noting that there doesn't seem to be an official convention 
for collection names. (Source) Though it does appear the community has 
established its own conventions, for example the Mongoose library unless 
specified otherwise, chooses a default collection name which is the model
 name, to lowercase, then pluralized. i.e. Video → videos

*/