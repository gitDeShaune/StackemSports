const mongoose = require('mongoose')
//all the sports schemsas are the same,  but they are not in the same group so that there's
//not too much strain for the queries

const nbaPlayerSchema = new mongoose.Schema({
	player_name: { type:String,required: true,},
	year: { type:Number,required: true,},
	team:{ type: String, required: true}, 
	position: {type: String,required: true,},    
	last_season_stats: {type: [String],required: true,}, 	
	
	});
	
/*last season stats = google data for now = mpg, ppg, fg%,3p%,rbs,asts	*/
	
const nbaPlayerModel = mongoose.model("nba-players", nbaPlayerSchema)

//had to do 'nbas' for some reason; supposed to be convention, but was only working method as well
module.exports = nbaPlayerModel;	

/*ALL player models will have the same parameters, 
should have previous season data
what ever information is available for all players
^for now (position, age, year or draft year, current team, origin )
maybe height , left/right hand, 
maybe a little different for each, like height for basketball but not for soccer
championships? accolades/awards?


**for now (position, age, year or draft year, current team, origin )
** LAST YR's average Stats, if available, 

*/


/*for SOCCER, transfermarkt.us, for season data at least -- do some math to get goals/game, minutes per game,
^365scores for passing data */