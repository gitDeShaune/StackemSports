

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







export default function WNBA(){
	//<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	const [listOfUsers, setListOfUsers] = useState([ ])
	
	
	//const [listOfLeaguePlayers, setListOfLeaguePlayers] = useState([ ]) /*players in league, list is cross searched by player name, for player bio, season data, and others*/
	
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
		Axios.get("https://stackemsports.onrender.com/api/stats/wnba").then((response) => {
			setListOfUsers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	
	/*setUsersByCategory(e.target.name)*/
	
	useEffect(() => {
		document.title = "Stack'em Sports | WNBA";
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
	
	
	let user_limit_nba = 50;//5 * 5 //user_limit should be # of players x max available stats by a player
	
	let grid_row_count = 5;
	
	let grid_col_count = 5;
	
	
	var gridStyle;
	
	const phoneStyle = {
	  marginLeft: "16%",
	  
	};
	const computerStyle = {
	  marginLeft: "2%",
	  
	};
	
	
	if(window.matchMedia("(pointer: coarse)").matches) {
		// touchscreen is main input (ie.phone?)
		user_limit_nba = 25; //5 is # of categories
		grid_row_count = 1;//2 might be posible
		grid_col_count = 25;
		
		gridStyle = phoneStyle;
		
	}else{
		console.log("NOT TOUCHSCREEN");
		grid_col_count = 5;
		grid_row_count = 5;
		user_limit_nba = 25; 
		
		gridStyle = computerStyle;
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
					
	return(<div  class = "grid-fill">
	

		
		<div class="stat-search-n-nav">
			
			<h1 class="page-header"> WNBA </h1>
			<div name = 'basketball-stat-gallery' class="stat-nav"  >
				<button name = 'points' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Points </button>
				<button name = 'rebounds' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Rebounds </button>
				<button name = 'assists' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Assists </button>
				<button name = 'blocks' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Blocks </button>
				<button name = 'steals' class="stat-button" onClick={(e)=> setCategory(e.target.name)}> Steals </button>
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
		
		<div class = "cards-container" style = {containerSize}>
		
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
			
			
				<div class = "grid-holder" style={{ flex: '1 1 auto'}}>
				<AutoSizer disableHeight class = "grid-holder" style = {gridStyle}>
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