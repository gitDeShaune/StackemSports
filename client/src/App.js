//remember, App.js is a function itself so it's okay to use functions for the pages and whatnot functionality
import './App.css';

import './stat-styles.css';

import './general-styles.css'

import './table-chart.css'

import './card-styles.css'

import './page-styles.css'

import './recharts-styles.css'

import './footer-style.css'

import './stackem-grid.css'

import './league-search.css'

import './navbar-style.css'

import './search-styles.css'

import './hamburger-style.css'


import {useState, useEffect} from 'react'
import Axios from 'axios'
//import BarChart from "./components/BarChart"
import { Chart } from 'chart.js'
//import { Bar } from "react-chartjs-2"
import {Charter} from './components/Charter'
//import {createImage} from './Imager.js'
import Navbar from './components/Navbar' //take away {} when it is default export
import Footer from './components/Footer' 
import Header from './components/Header' 


import React, {lazy,Suspense} from 'react';

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
//.import Home from './pages/Home'






//table attempt
//import * as React from "react";
//import { useTable } from "react-table";

//tabl attempt

import 'bootstrap/dist/css/bootstrap.min.css'
import InputGroup from 'react-bootstrap/InputGroup'

//import PrivacyPolicy from './components/PrivacyPolicy' /*need to move About and priv and etc to pages and make it work*/
//import SportsAvailable from './components/Sports-Available' /*need to move About and priv and etc to pages and make it work*/
//import ContactUs from './components/ContactUs'
//import About from './components/About'

//import KBO from './pages/Kbo'


const About = lazy(() => import('./components/About'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const SportsAvailable = lazy(() => import('./components/Sports-Available'))
const ContactUs = lazy(() => import('./components/ContactUs'))


//import WNBA from './pages/Wnba'
//import NBA from './pages/Nba'
//import MLB from './pages/Mlb'
//import NHL from './pages/Nhl'



const WNBA = lazy(() => import('./pages/Wnba'))
const NBA = lazy(() => import('./pages/Nba'))
const MLB = lazy(() => import('./pages/Mlb'))
const NHL = lazy(() => import('./pages/Nhl'))
const BIG3 = lazy(() => import('./pages/Big3'))
const KBO = lazy(() => import('./pages/Kbo'))
const LOL = lazy(() => import('./pages/Lol'))
const UFC = lazy(() => import('./pages/UFC'))



/*
async function getData(){
	
	
Axios.get("https://stackemsports.onrender.com/api/stats/kbo").then((response) => {
			kboData = response.data
})

Axios.get("https://stackemsports.onrender.com/api/stats/wnba").then((response) => {
				wnbaData = response.data
			})
			
Axios.get("https://stackemsports.onrender.com/api/stats/lol").then((response) => {
				lolData = response.data
			})
			
		
Axios.get("https://stackemsports.onrender.com/api/stats/big3").then((response) => {
				big3Data = response.data
			})	
	
	
	

}


let kboData;
	
let wnbaData;

let lolData;

let big3Data;
*/

//probably have this include the help links and about and contact at bottom of page







function App() {
	
	const [listOfUsers, setListOfUsers] = useState([ ])
	
	
	

	return (
		<>
		<Header/>
		
		<div className = 'stackem-grid'>
			
			
			
			
			<div className = "container">
			
				<Navbar/>
			    
				<Routes>
				<Route path ="/" element = {<WNBA />} />
				</Routes>
				<Routes>
					
					<Route path ="/kbo" element = {<KBO />} />
					
					<Route path ="/nba" element = {<NBA />} />
					<Route path ="/mlb" element = {<MLB />} />
					<Route path ="/nhl" element = {<NHL />} />
					<Route path ="/wnba" element = {<WNBA />} />
					<Route path ="/big3" element = {<BIG3 />} />
					<Route path ="/lol" element = {<LOL />} />
					<Route path ="/ufc" element = {<UFC />} />
					
					
					
					<Route path ="/about" element = {<About />} />
					<Route path ="/privacy-policy" element = {<PrivacyPolicy />} />
					<Route path ="/sports-available" element = {<SportsAvailable />} />
					<Route path ="/contact-us" element = {<ContactUs />} />
					
					
				</Routes>
				
				<Footer/>
			</div>
			
				
			
		</div>
		</>
	);




}


export default App;






/*function makeTable(jarray){//(jarray){
	
	
	/*const table = document.createElement("table");
	//header
	//traw = actual table a a data points
	var traw = document.createElement("tbody");
	traw.insertRow()
	//for (let i = 0;i < opp.length;i++){
		//var row = traw[0]//.insertRow(-1)
	traw.insertRow().innerHTML = "<td>"+5+"</td>" + "<td>"+10+"</td>"
	//}
	/*for (let i = 0;i < opp.length;i++){
		//traw.row[0].innerHTML = "<td>RAM</td>"
		//console.log(table.rows.length)
	}
	
	//console.log(traw.rows.length)
	return traw
	
	
	{jarray.map((user) => {
		  return (
			<div>
			  <h1>Name: {user.name}</h1>
			  <h1>STAT: {user.prop_title}</h1>
			  
			</div>
		  );
		})}
	
}
*/

/*
function chartJSON2(user){
		const data = {
			datasets: [{
				barPercentage: 0.5,
				barThickness: 6,
				maxBarThickness: 8,
				minBarLength: 2,
				data: [10, 20, 30, 40, 50, 60, 70]
			}]
		};
	/*const [userData, setUserData] = useState({
    //labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: user.lfg_stats,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
	//<BarChart chartData={data}/>
	return (
		<div>
			
			<div> HELLO </div>
		</div>
	
	)
	
}*/




/*
function chartJSON(user){
	//get size of user.lf_opps
	let size_array = []
	var max = 0
	//let graph_data = user.lfg_stats
	let graph_data =[]
	
	for(let i = 0; i < user.lfg_stats.length;i++){
		size_array.push(i)
		if(user.lfg_stats[i] > max){
			max = user.lfg_stats[i]
		}
		graph_data.push({stats: user.lfg_stats[i]}) //fill graph_data and now ready for input into graph 
		//account for negative numbers(eg. only in case of fantasy points)
	}//(ie. [0,1,2,...,5] array for idxs used in map 
	
	
	
	//user.lfg_stats
	//if max is not divisible by 4, go to nearest 
	max = Math.ceil(max / 4) * 4
	
	//get max value from stats
	//removed widht and height for BarChart
	//
	return [size_array, max, 
		(
    <div style={{ textAlign: "center" }}>
      <h1>Socail Media Users</h1>
      <div className="App">
        
        <BarChart
          
          data={graph_data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          
          <YAxis domain={[0, max]}/>
          
          <CartesianGrid strokeDasharray="3 3" />
          
          <Bar dataKey="stats" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  )]
	
}*/



/*
function tableJSON(user){
	/let chart_n_stuff = chartJSON(user)
	
	let max = chart_n_stuff[1]
	console.log(max)
	
	let size_array = chart_n_stuff[0]/
	
	let size_array = []
	var max = 0
	//let graph_data = user.lfg_stats
	let graph_data =[]
	
	for(let i = 0; i < user.lfg_stats.length;i++){
		size_array.push(i)
		if(user.lfg_stats[i] > max){
			max = user.lfg_stats[i]
		}
		graph_data.push({stats: user.lfg_stats[i]}) //fill graph_data and now ready for input into graph 
		//account for negative numbers(eg. only in case of fantasy points)
	}//(ie. [0,1,2,...,5] array for idxs used in map 
	
	
	
	//user.lfg_stats
	//if max is not divisible by 4, go to nearest 
	max = Math.ceil(max / 4) * 4
	
	
	//took width={500} height={30} out of BarChart tag
	
	let graph = (
	<div class = 'graph'>
				<div style={{ textAlign: "center" }}>
				  
				  <div className="GRAPH">
					<ResponsiveContainer width="100%" aspect = {3}>
					<BarChart
					  
					  data={graph_data}
					  margin={{
						top: 5,
						right: 30,
						left: 80,
						bottom: 5,
					  }}
					  barSize={15}
					>
					  
					  <YAxis domain={[0, max]}/>
					  
					  <CartesianGrid strokeDasharray="6 6" />
					  
					  <Bar dataKey="stats" fill="#8884d8" />
					</BarChart>
					</ResponsiveContainer>
				  </div>
				</div>
	</div>)
	
	
	
	//add style to these tags so that they will autoamtically change when added to page, due to css file
	
	//div class is graph so it can be customized
	//
	
	return (
		
		<div class = 'stat-box' >
			{graph}
		
			<div class = 'chart'>
				
				<table>
							<tr>
								<th>OPPs</th>
								<th>STAT</th>
								<th>DATE</th>
							</tr>
							
							{size_array.map((idx) => {
							  
							  return (
								<tr>
										<td>{user.lfg_opps[idx]}</td>
										<td>{user.lfg_stats[idx]}</td>
										<td>{user.lfg_dates[idx]}</td>
								</tr>
							  )
							})}
							
							
								
							
				</table>
			</div>	
		</div>
	)
	
}*/













/*
<PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
		
		*/

////<BarChart chartData={userData}/>

//{listOfUsers.map((user) => {
				
				
				//return ( 
				//<div>
				
				
				
				//</div>	
				//)		
				
			  /*return (
				<div>
				  <h1>Name: {user.name}</h1>
				  <h1>STAT: {user.prop_title}</h1>
				  
				</div>
			  );*/
			  
			  //return (chartJSON2(user))
			  
			//})}
			
			
			