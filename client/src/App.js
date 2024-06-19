//remember, App.js is a function itself so it's okay to use functions for the pages and whatnot functionality
import './App.css';
import './stat-styles.css';
import './general-styles.css'
import './table-chart.css'
import './card-styles.css'

import './page-styles.css'

import './recharts-styles.css'

import './footer-style.css'

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
//.import Home from './pages/Home'
import About from './components/About'
import PrivacyPolicy from './components/PrivacyPolicy' /*need to move About and priv and etc to pages and make it work*/
import SportsAvailable from './components/Sports-Available' /*need to move About and priv and etc to pages and make it work*/
import ContactUs from './components/ContactUs'

import WNBA from './pages/Wnba'
import NBA from './pages/Nba'
import MLB from './pages/Mlb'
import NHL from './pages/Nhl'


//table attempt
//import * as React from "react";
//import { useTable } from "react-table";

//tabl attempt

import 'bootstrap/dist/css/bootstrap.min.css'
import InputGroup from 'react-bootstrap/InputGroup'


function makeTable(jarray){//(jarray){
	
	
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
	*/
	
	{jarray.map((user) => {
		  return (
			<div>
			  <h1>Name: {user.name}</h1>
			  <h1>STAT: {user.prop_title}</h1>
			  
			</div>
		  );
		})}
	
}

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
  });*/
	//<BarChart chartData={data}/>
	return (
		<div>
			
			<div> HELLO </div>
		</div>
	
	)
	
}

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
	
}



function tableJSON(user){
	/*let chart_n_stuff = chartJSON(user)
	
	let max = chart_n_stuff[1]
	console.log(max)
	
	let size_array = chart_n_stuff[0]*/
	
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
	
}


function App() {
	
	const [listOfUsers, setListOfUsers] = useState([ ])
	
	
	//const data = [300,200,500,300,600];
	/*const data = [
    { name: "Facebook", users: 4 },
    { name: "Instagram", users: 5 },
    { name: "Twiter", users: 6 },
    { name: "Telegram", users: 7 },
  ];*/
  
	/*const data = [
	{stats: 1 },
	{stats: 2 },
	{stats: 3 },
	{stats: 4 },
	{stats: 8 },
		];
		
		*/
		//dataKey has to match the label(ie. stats, names, etc.
  
	/*const [userData, setUserData] = useState({
    labels: [2019,2020,2021,2022,2023],
    datasets: [
      {
        label: "Users Gained",
        data: [2,3,5,5,6],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
	});*/
	
	
	const data1 = {
					labels: [2019,2020,2021,2022,2023],
					datasets: [
					  {
						label: "Users Gained",
						data: [2,3,5,5,6],
						borderColor: "black",
						borderWidth: 2,
					  },
					],
				};
				
				
	
	//setUserData(data)
	/*
	useEffect(()=>{
		Axios.get("http://localhost:3001/api/stats/nba").then((response) => {
			setListOfUsers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	*/
	
	/*
	var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
	var yValues = [55, 49, 44, 24, 15];
	var barColors = ["red", "green","blue","orange","brown"];
	
	new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});
*/

	//<button onClick = {createImage()}> CLICK</button>
	//<canvas id="myChart" style="width:100%;max-width:600px"></canvas>
	
	/*
	return (
		<div className="App">
			<div className="usersDisplay" style={{width:400}}>
					
					
					<h1> Hello Hello </h1>
					
				
			</div>
	
		</div>
	)
	*///UNCOMMENT THS AT SOME POINT
	
	//<BarChart chartData={data}/>
	//<> </> empty tag des the trick for encolsing leements
	
	/*
	
	temporarily took <Header/> out of colored-div*/
	return (
		<>
		
		<div id="colored-div">
			<Header/>
			
			
			
			<div className = "container">
			
				
			    <Navbar/>
				<Routes>
				<Route path ="/" element = {<NBA />} />
				</Routes>
				<Routes>
					
					
					<Route path ="/nba" element = {<NBA />} />
					<Route path ="/mlb" element = {<MLB />} />
					<Route path ="/nhl" element = {<NHL />} />
					<Route path ="/wnba" element = {<WNBA />} />
					<Route path ="/about" element = {<About />} />
					<Route path ="/privacy-policy" element = {<PrivacyPolicy />} />
					<Route path ="/sports-available" element = {<SportsAvailable />} />
					<Route path ="/contact-us" element = {<ContactUs />} />
					
					
				</Routes>
				
				
			</div>
			<div></div>
				<Footer/>
			
		</div>
		</>
	);
	
	/*
	
		<div>
		{listOfUsers.map((user) => {
				
			
			  
			  return (tableJSON(user))
			  
			})
		}
		</div>
	
	
	
	
	
	
	*/
    //<Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
	//<Tooltip cursor={false}/> //scroll over
	//
}
//put all of this in a Component
//give chart a border
////<Legend />
////<Bar data={data}></Bar>

export default App;



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
			
			
			