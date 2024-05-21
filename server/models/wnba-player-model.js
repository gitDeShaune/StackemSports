const mongoose = require('mongoose')
//all the sports schemsas are the same,  but they are not in the same group so that there's
//not too much strain for the queries

const wnbaPlayerSchema = new mongoose.Schema({
	name: { type:String,required: true,},
	year: { type:Number,required: true,},
	team:{ type: String, required: true}, 
	position: {type: String,required: true,},    
	last_season_stats: {type: [String],required: true,}, 	 
	
	});
	
/*last season stats = 	*/
	
const wnbaPlayerModel = mongoose.model("wnba-players", wnbaPlayerSchema)

//had to do 'wnbas' for some reason; supposed to be convention, but was only working method as well
module.exports = wnbaPlayerModel;	