

import {useState, useEffect} from 'react'
import Axios from 'axios'


import PlayerCard from "../components/PlayerCard";
//import * as CatData from "./data";
//import * as utils from "./helpers.js";
import { v4 as uuidv4 } from "uuid";

//import Navbar from './components/Navbar' //take away {} when it is default export
import React from 'react'

/*
import { PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer} from 'recharts'
  
  */

import {Route,Routes} from 'react-router-dom'
//import Home from './pages/Home'
//import About from './pages/About'

//import 'bootstrap/dist/css/bootstrap.min.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'


//import '../general-styles.css'
//import '../table-chart.css'
//import '../stat-styles.css'

import $ from 'jquery';
//import ReactCardFlip from 'react-card-flip'

//import '../search-styles.css'


import {FixedSizeList, FixedSizeGrid} from 'react-window';// as List as List
import AutoSizer from "react-virtualized-auto-sizer";






export default function LOL(){
	//<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	const [listOfUsers, setListOfUsers] = useState([ ])
	
	
	//const [listOfLeaguePlayers, setListOfLeaguePlayers] = useState([ ]) /*players in league, list is cross searched by player name, for player bio, season data, and others*/
	
	const [search, setSearch] = useState('')
	//console.log(search)
	
	//var category = ''
	const [category,setCategory] = useState('kills')
	//const [usersByCategory, setUsersByCategory] = useState([])
	
	
	const [isFlipped, setIsFlipped] = useState(false);
	
	function flipCard(){
		setIsFlipped(!isFlipped);
	}
	
	//"http://localhost:3001/api/stats/nba"
	useEffect(()=>{
		Axios.get("https://stackemsports.onrender.com/api/stats/lol").then((response) => {
			setListOfUsers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	
	
	/*setUsersByCategory(e.target.name)*/
	
	useEffect(() => {
		document.title = "Stack'em Sports | LOL";
	}, []);/*to change tab title for different pages */
	
	/*buttoner and sample_flippers was here*/
	
	
	/*<hr> is a line break like in prizepicks */
	
	const sample_nba_player = {
	name: "Sample James",
	league: "LOL",
	team: "Good Team", 
	position: "Frontrunner",    
	last_season_stats: ["33.3","18.2","51.3%","43.0%","4.4","5.0"] , 
	lfg_opps: ["33.3","18.2","51.3%","43.0%","4.4"],
	lfg_dates: ["33.3","18.2","51.3%","43.0%","4.4"],
	lfg_stats: [0,0,0,0,0],
	prop_title: "Prop",
	
	
	}
	
	const sample2 = {
	name: "Kevin Sample Jr.",
	league: "LOL",
	team: "Good Team", 
	position: "Frontrunner",    
	last_season_stats: ["33.3","18.2","51.3%","43.0%","4.4","5.0"] , 
	lfg_opps: ["33.3","18.2","51.3%","43.0%","4.4"],
	lfg_dates: ["33.3","18.2","51.3%","43.0%","4.4"],
	lfg_stats: [0,0,0,0,0],
	prop_title: "Prop",
	
	
	}

	
	
	
	let user_limit_nba = 50;//5 * 5 //user_limit should be # of players x max available stats by a player
	
	let grid_row_count = 5;
	
	let grid_col_count = 5;
	
	if(window.matchMedia("(pointer: coarse)").matches) {
		// touchscreen is main input (ie.phone?)
		user_limit_nba = 25; //5 is # of categories
		grid_row_count = 1;//2 might be posible
		grid_col_count = 25;
		
	}else{
		console.log("NOT TOUCHSCREEN");
		grid_col_count = 5;
		grid_row_count = 5;
		user_limit_nba = 25; 
	}
	

	
	const containerSize = {
	  height: "auto"
	}
	
	
	
	var sum = 0;
	
	
	
	var cardList = Array(grid_row_count).fill(0);//[0,0,0,0,0];//Array(grid_row_count);//[][];
	
	cardList = [[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>]]
	
	//var Cards;
	
	
	var Cards = ({columnIndex,rowIndex,style}) => (
	
		<div style = {style} > 
		{cardList[columnIndex][rowIndex]}
		</div>
	
	)
	
	//cardList
	
	/*if ((window.devicePixelRatio * 100) % 80 < 7){
		//size is close enugh to 80%
		grid_row_count-=1;
		//grid_col_count -=1
	}
	*/
	
	
	//var height = 1000;
	//var width = 500;
					
	return(<div>
	
		
		
		<nav class="stat-search-n-nav">
		
			<h1 class="page-header"> League of Legends </h1>
			
			<div name = 'basketball-stat-gallery' class="stat-nav"  >
				<button name = 'kills' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Kills </button>
				<button name = 'deaths' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Deaths </button>
				<button name = 'assists' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Assists </button>
				<button name = 'kills(gm 1-2)' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Kills (Games 1-2) </button>
				<button name = 'deaths(gm 1-2)' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Deaths (Games 1-2) </button>
				<button name = 'assists(gm 1-2)' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Assists (Games 1-2) </button>
				
				
				
				
				
				
				
				
				
			</div>
			
			
			
			<div class="search-container">
			
			<form>
			
					<div class = "search">
						<span class="search-icon material-symbols-outlined"></span>
						<input class="search-input" type="search" placeholder="Search for player" onChange={(e)=> setSearch(e.target.value)}/>
					</div>
			
			
			</form>
			
			</div>
		</nav>	
		
		
		<br/>
		
		
		
		
		
		<div class = "cards-container" style={containerSize}>
			
			<div class = "flip-card-container">
			
			{listOfUsers.filter((user)=> {
					if(search != ''){
						cardList = [[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>]]
	
						
						return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search.toLowerCase())
						/*^changed from includes(search) to includes (search.toLowerCase()) to work for capital letters in search*/
					}else{
						cardList = [[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>],[<div/>,<div/>,<div/>,<div/>,<div/>]]
	
						
						return category.toLowerCase() === '' ? user : user.prop_title.toLowerCase() == category
						
						
					}
				}).slice(0,user_limit_nba).map((user, index) => {
						
					
					  cardList[index%grid_row_count][Math.floor(index/grid_row_count)] = ( <PlayerCard userData={user}/>  ) 
					  
					  
					  })
					  
					  
					
				}
			
			
				<div class = "grid-holder" style={{ flex: '1 1 auto' }}>
				<AutoSizer disableHeight class = "grid-holder">
				{({width }) => (
				
					<FixedSizeGrid 
						
						columnCount={grid_row_count}
						columnWidth={228}
						height={1580}
						rowCount={grid_col_count+1}
						rowHeight={300}
						width={1200}
						
					
					>
					
						{Cards}
						
					</FixedSizeGrid>
					
					)}
					
				</AutoSizer>
				</div>
				
			
				
			</div>
			
		</div>
		
		
		
		
		
	</div>)
	//in <PlayerCard> crossUserData = {sample_nba_player}
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name)
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) === undefined? sample_nba_player:listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) 
	//^this should be the better option, but don't know if doing find twice 
	//return <h1> NBA </h1>
}


//{cardList}

//	rowHeight = {500}
		//			columnWidth = {200}









/*
<div style={{ flex: '1 1 auto' }}>
				<AutoSizer disableHeight>
				{({width }) => (
				
				
				
				)}
					
				</AutoSizer>
				</div>


*/










			
			
