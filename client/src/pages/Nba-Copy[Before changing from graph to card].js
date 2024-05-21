

import {useState, useEffect} from 'react'
import Axios from 'axios'

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
				  
				  <div className="graph">
				  
					<ResponsiveContainer width="99%" aspect = {3}>
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
		<div class = 'stat-box quick-stats' >
			
				
			
				
					<h1>
					{user.name}
					</h1>
					
				
					<div >
						
						<table class = 'stat-table'>
						<thead>
									<tr>
										<th>OPP</th>
										<th>STAT</th>
										<th>DATE</th>
									</tr>
						</thead>
						
						<tbody>
									
									{size_array.map((idx) => {
									  
									  return (
										<tr>
												<td>{user.lfg_opps[idx]}</td>
												<td>{user.lfg_stats[idx]}</td>
												<td>{user.lfg_dates[idx]}</td>
										</tr>
									  )
									})}
						</tbody>			
									
										
									
						</table>
					</div>	
				
			
		</div>
		
	)
	
}









export default function NBA(){
	
	const [listOfUsers, setListOfUsers] = useState([ ])
	
	const [search, setSearch] = useState('')
	//console.log(search)
	
	//var category = ''
	const [category,setCategory] = useState('points')
	const [usersByCategory, setUsersByCategory] = useState([])
	
	useEffect(()=>{
		Axios.get("http://localhost:3001/api/stats/nba").then((response) => {
			setListOfUsers(response.data)
		})//api endpoint rmemeebrr
	}, [])
	
	/*setUsersByCategory(e.target.name)*/
	return(<div>
		
		<div name = 'stat-gallery'>
		<button name = 'points' onClick={(e)=> setCategory(e.target.name)}> PTS </button>
		<button name = 'rebs' onClick={(e)=> setCategory(e.target.name)}> REBS </button>
		<button name = 'assists' onClick={(e)=> setCategory(e.target.name)}> ASTs </button>
		<button name = 'blocks' onClick={(e)=> setCategory(e.target.name)}> Blocks </button>
		</div>
		<Form>
			<InputGroup>
				<Form.Control 
					onChange={(e)=> setSearch(e.target.value)}
					placeholder = 'search name'/>
			</InputGroup>
		
		</Form>
		
		
		{
			search.toLowerCase() == '' &&
			<div name = 'stat-container'>
				EMPTY SEARCH BAR
				{category}
			</div>
		}
		
		
		
		
		
		
		<div>
		{listOfUsers.filter((user)=> {
			if(search != ''){
				return search.toLowerCase() === '' ? user : user.name.toLowerCase().includes(search)
			}else{
				return category.toLowerCase() === '' ? user : user.prop_title.toLowerCase() == category
			}
		}).map((user) => {
				
				//keep as listOfusrr
			  
			  return (tableJSON(user))
			  
			})
		}
		</div>
	</div>)

	//return <h1> NBA </h1>
}

/*{
			search.toLowerCase() == '' &&
			<div name = 'stat-container'>
				EMPTY SEARCH BAR
				{setListOfUsers(usersByCategory)}
			</div>
		}
		
		*/