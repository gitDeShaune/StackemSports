const express = require("express")
const app = express() 
const mongoose = require("mongoose")

const big3Model = require('./models/BIG3-model')
const UserModel = require('./models/Users')
const nbaModel = require('./models/NBA-model')
const mlbModel = require('./models/MLB-model')
const wnbaModel = require('./models/WNBA-model')
const nhlModel = require('./models/NHL-model')
const kboModel = require('./models/KBO-model')
const lolModel = require('./models/LOL-model')
const commentModel = require('./models/commentModel')




const nbaPlayerModel = require('./models/nba-player-model')
const nhlPlayerModel = require('./models/nhl-player-model')
const wnbaPlayerModel = require('./models/wnba-player-model')
const mlbPlayerModel = require('./models/mlb-player-model')


/*easiest to complete sports: NBA, NHL, WNBA, NFL, MLB
  hardest to complete sports: SOCCER (maybe not MLS)
  gotta have XFL, college sports*/

const cors = require('cors')



app.use(express.json())
app.use(cors())

//COMPAS URL: mongodb+srv://<username>:<password>@prizepicks.cc2dxbx.mongodb.net/
//APP URL: mongodb+srv://<username>:<password>@prizepicks.cc2dxbx.mongodb.net/?retryWrites=true&w=majority
//APP URL w/ DATABSABSE specified mongodb+srv://shaune1:Yves1004@prizepicks.cc2dxbx.mongodb.net/merntutorial?retryWrites=true&w=majority
const uri = "mongodb+srv://shaune1:Yves1004@prizepicks.cc2dxbx.mongodb.net/stats?retryWrites=true&w=majority"


mongoose.connect(uri
	);




/* POST REQUEST */

app.post("/api/UI/create-comment", (req,res) => {
	
	const txt = req.body;
	const newComment = new commentModel(txt);
	await newComment.save();
	
	res.json(txt); /*checking if data was found, elte later*/
	
	
})


async function getPlayersNBA(){
	const Players = await nbaPlayerModel.find({});
	
	return Players;
	
}

/* '.../players/...', even though all documents are in 'stats' collection*/
app.get("/api/players/nba", function (req, res){
	
	getPlayersNBA().then(function(FoundPlayersNBA){
		res.json(FoundPlayersNBA)
		
	})
	
	
})

//---WNBAplayers

async function getPlayersWNBA(){
	const Players = await WNBAPlayerModel.find({});
	
	return Players;
	
}

/* '.../players/...', even though all documents are in 'stats' collection*/
app.get("/api/players/wnba", function (req, res){
	
	getPlayersWNBA().then(function(FoundPlayersWNBA){
		res.json(FoundPlayersWNBA)
		
	})
	
	
})

//--NHL

async function getPlayersNHL(){
	const Players = await nhlPlayerModel.find({});
	
	return Players;
	
}

/* '.../players/...', even though all documents are in 'stats' collection*/
app.get("/api/players/nhl", function (req, res){
	
	getPlayersNHL().then(function(FoundPlayersNHL){
		res.json(FoundPlayersNHL)
		
	})
	
	
})


//--mlb

async function getPlayersMLB(){
	const Players = await mlbPlayerModel.find({});
	
	return Players;
	
}

/* '.../players/...', even though all documents are in 'stats' collection*/
app.get("/api/players/mlb", function (req, res){
	
	getPlayersMLB().then(function(FoundPlayersMLB){
		res.json(FoundPlayersMLB)
		
	})
	
	
})



/*------------------------------------------------------------*/

async function getStatsLOL(){
	
	const Stats = await lolModel.find({});
	
	//prop_title: 'rebs'
	
	
	return Stats;
	

}

app.get("/api/stats/lol", function (req, res){
	
	getStatsLOL().then(function(FoundStats){
		res.json(FoundStats)
		
	})
	
	
})

async function getStatsNBA(){
	//var Stats = null
	/*switch(arg){
		case "nba":
			Stats = await nbaModel.find({});
		default:
			Stats = await UserModel.find({});
			console.log("showing user data error")
	}
	*/
	const Stats = await nbaModel.find({});
	
	//prop_title: 'rebs'
	
	
	return Stats;
	

}

app.get("/api/stats/nba", function (req, res){
	
	getStatsNBA().then(function(FoundStats){
		res.json(FoundStats)
		
	})
	
	
})


async function getStatsBIG3(){
	//var Stats = null
	/*switch(arg){
		case "nba":
			Stats = await nbaModel.find({});
		default:
			Stats = await UserModel.find({});
			console.log("showing user data error")
	}
	*/
	const Stats = await big3Model.find({});
	
	//prop_title: 'rebs'
	
	
	return Stats;
	

}

app.get("/api/stats/big3", function (req, res){
	
	getStatsBIG3().then(function(FoundStats){
		res.json(FoundStats)
		
	})
	
	
})




async function getStatsMLB(){

	const Stats = await mlbModel.find({});
	return Stats;
	

}

app.get("/api/stats/mlb", function (req, res){
	
	getStatsMLB().then(function(FoundStats){
		res.json(FoundStats)
		
	})
	
})

async function getStatsKBO(){

	const Stats = await kboModel.find({});
	return Stats;
	

}

app.get("/api/stats/kbo", function (req, res){
	
	getStatsKBO().then(function(FoundStats){
		res.json(FoundStats)
		
	})
	
})

//---WNBA

async function getStatsWNBA(){

	const Stats = await wnbaModel.find({});
	return Stats;
	

}

app.get("/api/stats/wnba", function (req, res){
	
	getStatsWNBA().then(function(FoundStats){
		res.json(FoundStats)
		
	})
	
})




async function getStatsNHL(){
	
	const Stats = await nhlModel.find({});

	return Stats;
	
}

app.get("/api/stats/nhl", function (req, res){
	
	getStatsNHL().then(function(FoundStats){
		res.json(FoundStats)
		
	})
	
	
})




app.post("/create-user", async (req,res) => {
	const user = req.body
	const newUser = new UserModel(user)
	await newUser.save();
	
	
	res.json(user)
})


app.listen(process.env.PORT ||3001, ()=> {
	console.log("SERVER RUNS PERFECTLY");
})//added env PORT



async function getItems(){
	const Items = await UserModel.find({});
	
	
	return Items;
	
}

app.get("/get-users", function (req, res){
	
	getItems().then(function(FoundItems){
		res.json(FoundItems)
		
	})
	
	
})


/*UserModel.find({}, (err, result) => {
		if(err){
			res.json(err)
		}else{
			res.json(result)
		}
	})*/ //^this is the antiquated way and doesn't work, just here for reference