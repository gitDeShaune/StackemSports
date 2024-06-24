

import {useState, useEffect} from 'react'
import Axios from 'axios'


import PlayerCard from "../components/PlayerCard";
//import * as CatData from "./data";
//import * as utils from "./helpers.js";
import { v4 as uuidv4 } from "uuid";

//import Navbar from './components/Navbar' //take away {} when it is default export
import React from 'react'
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

import {Route,Routes} from 'react-router-dom'
//import Home from './pages/Home'
//import About from './pages/About'

//import 'bootstrap/dist/css/bootstrap.min.css'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'


//import '../general-styles.css'
import '../table-chart.css'
import '../stat-styles.css'

import $ from 'jquery';
import ReactCardFlip from 'react-card-flip'

import '../search-styles.css'








export default function MLB(){
	//<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	const [listOfUsers, setListOfUsers] = useState([ ])
	
	
	const [listOfLeaguePlayers, setListOfLeaguePlayers] = useState([ ]) /*players in league, list is cross searched by player name, for player bio, season data, and others*/
	
	const [search, setSearch] = useState('')
	//console.log(search)
	
	//var category = ''
	const [category,setCategory] = useState('points')
	const [usersByCategory, setUsersByCategory] = useState([])
	
	
	const [isFlipped, setIsFlipped] = useState(false);
	
	function flipCard(){
		setIsFlipped(!isFlipped);
	}
	
	useEffect(()=>{
		Axios.get("https://stackemsports.onrender.com/api/stats/mlb").then((response) => {
			setListOfUsers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	useEffect(()=>{
		Axios.get("https://stackemsports.onrender.com/api/players/mlb").then((response) => {
			setListOfLeaguePlayers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	/*setUsersByCategory(e.target.name)*/
	
	useEffect(() => {
		document.title = "MLB - Stack'em Sports";
	}, []);/*to change tab title for different pages */
	
	/*buttoner and sample_flippers was here*/
	
	
	/*<hr> is a line break like in prizepicks */
	
	const sample_mlb_player = {
	player_name: "Sample Ohtani",
	year: 4,
	team: "Good Team", 
	position: "Frontrunner",    
	last_season_stats: ["33.3","18.2","51.3%","43.0%","4.4","5.0"] , 
	
	}
					
	return(<div >
	

		
		
		
		<div class="stat-search-n-nav">
			
			<div name = 'hockey-stat-gallery' class="stat-nav"  >
					<button name = 'SOG' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Shots On Goal </button>
					<button name = 'points' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Points</button>
					<button name = 'assists' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Assists </button>
					<button name = 'hits' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Hits </button>
					<button name = 'blocks' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Blocks </button>		
				
					<button name = 'goals_allowed' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Goals Allowed</button>
					<button name = 'save%' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Save Percentage</button>
					<button name = 'saves' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Saves </button>
					
					
			</div>	
			
			
			
			<div class="search-container">
			
			<form>
			
					<div class = "search">
						<span class="search-icon material-symbols-outlined"></span>
						<input class="search-input" type="search" placeholder="Search for player" onChange={(e)=> setSearch(e.target.value)}/>
					</div>
			
			
			</form>
			
			</div>
		</div>	
		
		<br/>
		
		<div class = "cards-container">
		<div class = "flip-card-container">
			{listOfUsers.filter((user)=> {
				if(search != ''){
					return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search.toLowerCase())
					/*^changed from includes(search) to includes (search.toLowerCase()) to work for capital letters in search*/
				}else{
					return category.toLowerCase() === '' ? user : user.prop_title.toLowerCase() == category
				}
			}).map((user) => {
					
					//keep as listOfusrr
					
					/*there  better be a matching name in players/league an stats/league
					  ^i should make a case or error statement/condition for this, but i wont for now and hope it doesn't cause a problem
					  not even doing toLowercase for the user.name stuff under here in the crossUserData*/
				  
				  return (<div>
				  <PlayerCard
						
						userData={user}
						crossUserData = {sample_mlb_player}
						
					  /></div>)
				  
				  
				})
			}
		</div>
		</div>
		
		
		
	</div>)
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name)
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) === undefined? sample_mlb_player:listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) 
	//^this should be the better option, but don't know if doing find twice 
	//return <h1> MLB </h1>
}

