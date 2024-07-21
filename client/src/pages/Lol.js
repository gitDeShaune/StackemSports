

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









export default function LOL(){
	//<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	const [listOfUsers, setListOfUsers] = useState([ ])
	
	
	//const [listOfLeaguePlayers, setListOfLeaguePlayers] = useState([ ]) /*players in league, list is cross searched by player name, for player bio, season data, and others*/
	
	const [search, setSearch] = useState('')
	//console.log(search)
	
	//var category = ''
	const [category,setCategory] = useState('kills')
	const [usersByCategory, setUsersByCategory] = useState([])
	
	
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
	/*
	
	name,
	lfg_dates,
	lfg_opps,
	lfg_stats,
	prop_title,
	league,
	last_season_stats,
	position,
	team
	*/
	
	
	//ATTEMPT TO LOWER LCPaint: Load PlayerCards initially, and input userData during search
	
	
	
	/*
	
		filter((user)=> {
					if(search != ''){
						return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search.toLowerCase())
						//^changed from includes(search) to includes (search.toLowerCase()) to work for capital letters in search
					}else{
						return category.toLowerCase() === '' ? user : user.prop_title.toLowerCase() == category
					}
				})
	
	
	
	*/
	
	let user_limit_nba = 25;//5 * 5 //user_limit should be # of players x max available stats by a player
	
	if(window.matchMedia("(pointer: coarse)").matches) {
		// touchscreen is main input (ie.phone?)
		user_limit_nba = 8; //5 is # of categories
		
		
	}else{
		console.log("NOT TOUCHSCREEN");
		user_limit_nba = 25; 
	}
	
	/*   filter((item, idx) => idx < 5)
	
	*/
	
	function printDivs(max){
		var p = document.getElementsByClassName("flip-card-container")[0];
		var newElement = document.createElement('div');
		newElement.setAttribute('id', "card-" + max);
		newElement.innerHTML = "<div> HELLO </div>";
		p.appendChild(newElement);
		

	}
	
	
	const containerSize = {
	  height: "auto"
	}
	
	var sum = 0;
	
	function render1(){
		var photoHolder = [];
		for(var i=1;i<=user_limit_nba;i++){
			var dx = i;
			photoHolder.push(
				(<PlayerCard id = {"card-" + {dx}} userData = {sample_nba_player}/>)
			);  
		}

		return (
			<div class = "flip-card-container">
				{photoHolder}
			</div>
		)
	}
	
	function render2(){
		
		return (<PlayerCard id = {"card-" } userData = {sample2}/>)
		
	}
	
	
	function findCards(){
		
		var p = document.getElementsByClassName("react-card-flip");
		//var d = document.createElement('PlayerCard');
		//var p = document.getElementsByTagName("PlayerCard");
		//document.getElementsByClassName("react-card-flip").item(0).innerHTML = (<PlayerCard id = {"card-" + 2} userData = {sample_nba_player}/>);
		//p[0] = render2()
		//document.getElementsByClassName("react-card-flip")[0] = d;
		//document.getElementsByClassName("react-card-flip").item(0) = d//.item(0);// = render2();
		//var r = z[0]
		return p.children[0];
		//console.log(p.length);
		
	}
					
	return(<div>
	
		
		
		<nav class="stat-search-n-nav">
			
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
						return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search.toLowerCase())
						/*^changed from includes(search) to includes (search.toLowerCase()) to work for capital letters in search*/
					}else{
						return category.toLowerCase() === '' ? user : user.prop_title.toLowerCase() == category
					}
				}).slice(0,user_limit_nba).map((user, index) => {
						
						//keep as listOfusrr
						
						/*there  better be a matching name in players/league an stats/league
						  ^i should make a case or error statement/condition for this, but i wont for now and hope it doesn't cause a problem
						  not even doing toLowercase for the user.name stuff under here in the crossUserData*/
					  //if(index  >=  user_limit_nba){/*easier than putting if statement around player card return statement*/
						//  return;//obsolete if slice is used insted
					  //}
					  
					  
					  return (<div>
					  <PlayerCard
							
							userData={user}
							
							
						  /></div>)
					  
					  
					})
					
				}
				
				
			</div>
			
		</div>
		
		
		
		
		
	</div>)
	//in <PlayerCard> crossUserData = {sample_nba_player}
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name)
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) === undefined? sample_nba_player:listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) 
	//^this should be the better option, but don't know if doing find twice 
	//return <h1> NBA </h1>
}



























			
			
