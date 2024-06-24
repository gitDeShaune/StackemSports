

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









export default function NBA(){
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
	
	//"http://localhost:3001/api/stats/nba"
	useEffect(()=>{
		Axios.get("https://stackemsports.onrender.com/api/stats/nba").then((response) => {
			setListOfUsers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	useEffect(()=>{
		Axios.get("https://stackemsports.onrender.com/api/players/nba").then((response) => {
			setListOfLeaguePlayers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	/*setUsersByCategory(e.target.name)*/
	
	useEffect(() => {
		document.title = "NBA - Stack'em Sports";
	}, []);/*to change tab title for different pages */
	
	/*buttoner and sample_flippers was here*/
	
	
	/*<hr> is a line break like in prizepicks */
	
	const sample_nba_player = {
	player_name: "Sample James",
	year: 4,
	team: "Good Team", 
	position: "Frontrunner",    
	last_season_stats: ["33.3","18.2","51.3%","43.0%","4.4","5.0"] , 
	
	}
					
	return(<div >
	
		
		
		<div class="stat-search-n-nav">
			
			<nav name = 'basketball-stat-gallery' class="stat-nav"  >
				<button name = 'points' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Points </button>
				<button name = 'rebounds' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Rebounds </button>
				<button name = 'assists' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Assists </button>
				<button name = 'blocks' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Blocks </button>
				<button name = 'steals' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Steals </button>
			</nav>
			
			
			
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
						
						
					  /></div>)
				  
				  
				})
			}
		</div>
		
		
		
	</div>)
	//in <PlayerCard> crossUserData = {sample_nba_player}
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name)
	//listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) === undefined? sample_nba_player:listOfLeaguePlayers.find(({ player_name }) => player_name === user.name) 
	//^this should be the better option, but don't know if doing find twice 
	//return <h1> NBA </h1>
}


/*<Form>
			
			<InputGroup>
				<Form.Control 
					onChange={(e)=> setSearch(e.target.value)}
					placeholder = 'search name'/>
			</InputGroup>
		
		</Form>*/


/* PRINT DEBUG for empty search bar
		{
			search.toLowerCase() == '' &&
			<div name = 'stat-container'>
				EMPTY SEARCH BAR
				{category}
			</div>
		}
		
		*/
		
		
		
		/*
		<div class = "flip-card-container">
		{listOfUsers.filter((user)=> {
			if(search != ''){
				return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search)
			}else{
				return category.toLowerCase() === '' ? user : user.prop_title.toLowerCase() == category
			}
		}).map((user) => {
				
				//keep as listOfusrr
			  
			  return (<div>
			  <PlayerCard
					
					userData={user}
					
				  /></div>)
			  
			  
			})
		}
		</div>
		
		*/









































//sample_flippers 

//< ReactCardFlip width = "400px" flipDirection='horizontal'>{tableJSON(user)}{graphJSON(user)}</ReactCardFlip>

//keep the tag brackets touching to prevent the reactcardlip 2 child error

//<div> dadsd sd s </div><div> sds sd s</div> 

/*{
			search.toLowerCase() == '' &&
			<div name = 'stat-container'>
				EMPTY SEARCH BAR
				{setListOfUsers(usersByCategory)}
			</div>
		}
		
		*/
		
		//<div>{tableJSON(user)}</div> 
		
		
		
/*

var buttoner = (
			<button style={{
							width: '150px',
							padding: '10px',
							fontSize: '20px',
							background: '#f5d9fa',
							fontWeight: 'bold',
							borderRadius: '5px'
						}} onClick={() => flipCard()}>
							Flip</button>
					)
	
	var sample_flippers = (
		
		<ReactCardFlip isFlipped={isFlipped}
            flipDirection="vertical">
            <div style={{
                width: '300px',
                height: '200px',
                background: '#d7fbda',
                fontSize: '40px',
                color: 'green',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                Welcome to GFG.
                <br />
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => flipCard()}>
                    Flip</button>
            </div>
            <div style={{
                width: '300px',
                height: '200px',
                background: '#fbd7f8',
                fontSize: '40px',
                color: 'blue',
                margin: '20px',
                borderRadius: '4px',
                textAlign: 'center',
                padding: '20px'
            }}>
                Computer Science Portal.
                <br />
                <button style={{
                    width: '150px',
                    padding: '10px',
                    fontSize: '20px',
                    background: '#f5d9fa',
                    fontWeight: 'bold',
                    borderRadius: '5px'
                }} onClick={() => flipCard()}>
                    Flip</button>
            </div>
        </ReactCardFlip>
		
		
		
	)
	
	
	
	*/
	
	
	/*SEARCHBAR CODE BEFORE USING WEBKIT VERSION WITH CANCEL BUTTON
	
	
	<div class="stat-searchbar">
				<Form class="stat-search" >
						
							
						
					<InputGroup >
						<div class = "search-icon"></div>
						
						<Form.Control 
							
							onChange={(e)=> setSearch(e.target.value)}
							placeholder = 'Search for player'/>
							
					</InputGroup>
				
				</Form>
			</div>
			
			
			
			
	*/