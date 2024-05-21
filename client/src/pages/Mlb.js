

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
		Axios.get("http://localhost:3001/api/stats/mlb").then((response) => {
			setListOfUsers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	useEffect(()=>{
		Axios.get("http://localhost:3001/api/players/mlb").then((response) => {
			setListOfLeaguePlayers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	/*setUsersByCategory(e.target.name)*/
	
	useEffect(() => {
		document.title = 'MLB - StackedSports';
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
			
				<div name = 'baseball-stat-gallery' class="stat-nav"  >
					<button name = 'hits' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Hits </button>
					<button name = 'RBIs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> RBIs</button>
					<button name = 'runs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Runs </button>
					<button name = 'walks' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Walks </button>
					<button name = 'singles' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Singles </button>
					<button name = 'doubles' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Doubles </button>
					<button name = 'triples' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Triples </button>
					<button name = 'HRs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Home Runs </button>
					<button name = 'SOs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Strikeouts </button>
				</div>
				
				
				
				<div name = 'baseball-stat-gallery' class="stat-nav"  >
					<div class = "stat-subtitle"> PITCHER </div>
					<button name = 'HAs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Hits Allowed</button>
					<button name = 'Ks' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Strikeouts(K)</button>
					<button name = 'RAs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Runs Allowed </button>
					<button name = 'ERs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Earned Runs </button>
					<button name = 'POs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Pitching Outs </button>
					<button name = 'BBs' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Walks </button>
					
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
		
		<hr/>
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
		
		
		
	</div>)
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name)
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) === undefined? sample_mlb_player:listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) 
	//^this should be the better option, but don't know if doing find twice 
	//return <h1> MLB </h1>
}

