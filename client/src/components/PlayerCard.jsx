// import { Icon, InlineIcon } from "@iconify/react";
// import grinningCat from "@iconify-icons/twemoji/grinning-cat";
//import * as utils from "../helpers.js"; //colors
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
//import RatingBox from "./ratingBox";

import { PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
  ResponsiveContainer,
  Cell,
  Label,
  LabelList} from 'recharts'

const CardStyle = {
  border: "1px solid black",
  
  margin: "20px",
  width: "180px",
  height: "250px"
}; //might not really want this, it may overwrite some styles but that just means I need to make to stlyes mroe organized and  undesrtandable/accessible
//there is some small square that is still the size of previous behind/still existing with the back card
//..maybe something to do with backface visibility

function makeTable(opps,stats,dates){
	let size_array = [] //is made flex so to get data in case of non-five previous games(ie. only 3,or just 7 when looking for 10)
	//to completely implement, wil have to remove 5 expected constants anyhere in the code
	size_array = [0,1,2,3,4,5];
	
	
	let tableaux = (
					<div class = "table-container">
						
						<table class = 'stat-table'>
						<thead >
									<tr >
										<th>vs.</th>
										<th>STAT</th>
										<th>DATE</th>
									</tr>
						</thead>
						<div class = "table-break"/> 
						<tbody>
									
									{size_array.map((idx) => {
										{/*hardcoded right now, but should redesign the function to have dates not backwards regardless of size)*/}
									  return (
										<tr>
												<td>{opps[4-idx]}</td>
												<td>{stats[4-idx]}</td>
												<td>{dates[4-idx]}</td>
										</tr>
									  )
									})}
						</tbody>			
									
										
									
						</table>
					</div>
					
		)
		
	return tableaux;	
	
	
}

function makeGraph(graph_data,max,stats){
	//stats(ie. lfg_stats) is a parameter because I was probably comparing it/using it separately in the previous version of this, before adding opp labels
	//don't let stat confuse, in dataKey = "xxx", xxx is the name of the data category in graph_data, ie. xxx: ###
	
	//let average = find_AVG(stats)
	
	//if max is not divisible by 4, go to nearest 
	let graph_max = Math.ceil(max / 4) * 4
	
	//domain 0,auto instead of 0,max
	//margin in BarChart affects the bar spacing and subsequent chart space
	
	/*changing margin in <BarChart, after commenting out some responsive container qualities, 
	the graph is able to show everything*/
	
	/*changed barsize ; but barsize 10 is good and should be default if problems occur*/
	/*removed <div class = 'graph'> from surrounding div in graph = (, since the div under is also graph class*/
	
	/*isAnimationActive = {alse} is needed to keep bar labels showing https://stackoverflow.com/questions/55722306/label-list-is-not-showing-in-recharts */
	
	
	/*fill='lightblue' in <CartesianGrid gives the graph background a color*/
	let graph = (
	<div >
				<div style={{ textAlign: "center" }}>
				  
				  <div className="graph">
				  
<ResponsiveContainer  width="99%" width = {240}  aspect = {1.2} height={100} >
					
					<BarChart 
					  width={800} 
					  height={250} 
					  data={graph_data} 
					  margin={{ top: 15, right: 10, left: 10, bottom: 5 }}
					  barSize={10}
					  
					>
					  <CartesianGrid strokeDasharray="3 3" />
					  <XAxis xAxisId={0} interval = {0} dataKey="opp" >
						
					  </XAxis>
					  <XAxis xAxisId={1}  dataKey="date" >
						
					  </XAxis >
					  
					  <Bar isAnimationActive={false} dataKey="stats" fill="blue">
						<LabelList dataKey="stats"  position="top" fill = 'black'/>
					  </Bar>
					</BarChart>
					</ResponsiveContainer>
					
				  </div>
				</div>
	</div>)
	
	/*need x-axis id to have multiple ones;  https://github.com/recharts/recharts/issues/1732*/
	/*either add opps to graph_data creation or just add it separately in this makeGraph function, to get the x-axis label names to show */
	return graph;
	
	/*used to be inside of makeGraph, but was replaced with code for data on top of bars, courtesy of https://recharts.org/en-US/api/Label


		<BarChart
					  
					  data={graph_data}
					  margin={{
						top: 0,
						right: 1,
						left: -30,
						bottom: -20,
					  }}
					  //help
					  barSize={10}
					  
					  
					>
					
						// tick={[0, graph_max-(Math.ceil(graph_max/2)),graph_max]}
					  <YAxis domain={[0, graph_max]}    />
					  
					  
					  <CartesianGrid horizontalStroke />
					  //horizontalStroke instead of strokedashedarray = 3 3 
					  
					  <Bar dataKey="stats"> {
						  graph_data.map((entry, index) => (
							<Cell fill={entry.stats > average ? '#008000' : '#b7a9bd' }/>
						  ))
						}  </Bar>
					  // color changes to bar graph 
					  
					</BarChart>
					
					
					
*/
	
}

function find_MIN(stats){
	var min = 500
	for(let i = 0; i < 5; i++){							
				if(stats[i] < min){
					min = stats[i];
				}
				//fill graph_data and now ready for input into graph 
				//account for negative numbers(eg. only in case of fantasy points)
	}
	
	return min;
}
function find_MAX(stats){
	var max = 0;
	for(let i = 0; i < 5;i++){							
				if(stats[i] > max){
					max = stats[i]
				}
				//fill graph_data and now ready for input into graph 
				//account for negative numbers(eg. only in case of fantasy points)
	}
	
	return max;
}
function find_AVG(stats){
	var total = 0;
	for(let i = 0; i < 5;i++){							
				total += stats[i]
				
				//fill graph_data and now ready for input into graph 
				//account for negative numbers(eg. only in case of fantasy points)
	}
	
	return total/5;
}

function fill_GRAPHDATA(stats,dates,opps){//added dates to have xaxis with dates on graph
	
	let graph_data = []
	for(let i = 0; i < 5;i++){							
				
				//graph_data.push({stats: stats[i]}) //fill graph_data and now ready for input into graph 
				
				graph_data.push({stats: stats[i],date: dates[i], opp: opps[i]})
				//fill graph_data and now ready for input into graph 
				//account for negative numbers(eg. only in case of fantasy points)
	}
	
	return graph_data;
	
}


function prop4Table(prop){
	switch(prop){
			case "points":
				return "Points Per Game";break;
			case "rebounds":
				return "Rebounds Per Game";break;
			case "assists":
				return "Assists Per Game";break;
			case "blocks":
				return "Blocks Per Game";break;
			case "steals":
				return "Steals Per Game";break;
			case "hits":
				return "Hits Per Game";break;	
			case "Earned Runs Allowed":
				return "ER Allowed";break;
			default:
				return (prop + " Per Game");break;
	}
	
	return "Stat Per Game";
}
function propIdx(prop,league){/*odnt need posiion if ever stat is named uniqeuly*/
	let oidx = 0
	//remember, season yr is first index
	
	if(league == "NBA" || league == "WNBA"){
		switch(prop){
			case "points":
				oidx = 1;break;
			case "rebounds":
				oidx = 2;break;
			case "assists":
				oidx = 3;break;
			case "blocks":
				oidx = 4;break;
			case "steals":
				oidx = 5;break;
			
		}
		
	}else if (league == "NHL"){
		
	}else if (league == "MLB"){
		
		
		switch(prop){
			case "Strikeouts(SO)":
				oidx = 9;break;
			case "Walks":
				oidx = 8;break;
			case "RBIs":
				oidx = 7;break;
			case "Runs":
				oidx = 6;break;
			case "Home Runs":
				oidx = 5;break;
			case "Triples":
				oidx = 4;break;
			case "Doubles":
				oidx = 3;break;
			case "Singles":
				oidx = 2;break;
			case "Hits":
				oidx = 1;break;			
			case "Strikeouts(K)":
				oidx = 5;break;
			case "Walks Allowed":
				oidx = 4;break;
			case "Earned Runs Allowed":
				oidx = 3;break;
			case "Runs Allowed":
				oidx = 2;break;
			case "Hits Allowed":
				oidx = 1;break;
			
		}	
			
	
	}
	
	
	return oidx;
}


function makeSeasonTable(last_ssn_stats,league,prop){/*NEED to include prop_title to filter for stat in chart*/
	
	
	let size_array = [] //is made flex so to get data in case of non-five previous games(ie. only 3,or just 7 when looking for 10)
	//to completely implement, wil have to remove 5 expected constants anyhere in the code
	size_array = [0,1,2,3,4,5];
	
	let row_headers = (
	
		<tr >
										<th>BAD</th>
										<th>BAD</th>
										<th>BAD</th>
										<th>BAD</th>
										
									</tr>
    )
	
	let row_stats = (
		<tr>
					<td>BADD</td>
					<td>BADD</td>
					<td>BADD</td>
					<td>BADD</td>
					
									
		</tr>		
	
	
	
	)
	
	
	//[table_prop,prop_idx] = 
	
	
	
	switch (league) {
	  case "MLB":
		size_array = [0,1,2,3,4,5,6];
		row_headers = (
			<tr >
					<th>YEAR</th>
					<th>{prop4Table(prop)}</th>
					
					
			</tr>
		
		
		)
		
		row_stats = (		
			<tr>
					<td>{last_ssn_stats[0]}</td>
					<td>{last_ssn_stats[propIdx(prop,league)]}</td>
									
			</tr>				
		)
		
		break;
	  case "NBA":
		size_array = [0,1,2,3,4,5,6];
		row_headers = (
			<tr >
					<th>YEAR</th>
					<th>{prop4Table(prop)}</th>
					
					
			</tr>
		
		
		)
		
		row_stats = (		
			<tr>
					<td>{last_ssn_stats[0]}</td>
					<td>{last_ssn_stats[propIdx(prop,league)]}</td>
									
			</tr>				
		)
		break;
	   case "WNBA":
		size_array = [0,1,2,3,4,5,6];
		row_headers = (
			<tr >
					<th>YEAR</th>
					<th>{prop4Table(prop)}</th>
					
					
			</tr>
		
		
		)
		
		row_stats = (		
			<tr>
					<td>{last_ssn_stats[0]}</td>
					<td>{last_ssn_stats[propIdx(prop,league)]}</td>
									
			</tr>				
		)
		break;	
		default:
		row_stats = (		
			<tr>
					<td>{last_ssn_stats[0]}</td>
					<td>{last_ssn_stats[1]}</td>
					<td>{last_ssn_stats[2]}</td>
					<td>{last_ssn_stats[3]}</td>
					<td>{last_ssn_stats[4]}</td>
					<td>{last_ssn_stats[5]}</td>
					<td>{last_ssn_stats[6]}</td>
					
					
			</tr>				
		)
	  
	}
	
	
	
	
	
	let tableaux = (
					<div class = "table-container">
						
						<table class = 'stat-table'>
						<thead >
						 {row_headers}
						</thead>
						
						<tbody>
									
									{row_stats}
						</tbody>			
									
										
									
						</table>
					</div>
					
		)
		
	return tableaux;	
	
	
}

function propABRV(prop_title,league){/*abbreviate prop*/
	
	
	//abrv = ''
	//idx = ''

	switch (league) {
	  case "NBA":
			//switch(prop_title){
				//case "
				
				
			//}
	  break;
	  
	  
	}
	
	//return [abrv,idx]
	
}



function fullProp(stat_prop){
	
	let prop = stat_prop;
	
	switch(stat_prop){
			case 'hits': prop = 'Hits';
			break;
			case 'Earned Runs Allowed': prop = "ER Allowed";
			break;
			case 'Home Runs': prop = 'Home Runs';
			break;
			case 'rebounds': prop = 'Rebounds';
			break;		
			case 'points': prop = 'Points';
			break;	
			case 'steals': prop = 'Steals';
			break;
			case 'blocks': prop = 'Blocks';
			break;
			case 'assists': prop = 'Assists';
			break;
		
	}
	
	
	return prop;
	
	
}


//...end of helper functions







/*function find_MIN_MAX_AVG(stats,min,max,graph_data){
	  var total = 0;
	  
			  for(let i = 0; i < 5;i++){
				
				total+= stats[i]
				if(stats[i] > max){
					max = stats[i]
				}
				if(stats[i] < min){
					min = stats[i]
				}
				graph_data.push({stats: stats[i]}) //fill graph_data and now ready for input into graph 
				//account for negative numbers(eg. only in case of fantasy points)
			  }
	  
	  
	  
	  
	  
  }*/
  
  /*, crossUserData*/
const PlayerCard = ( {userData}) => {
	/*took out {} from inside of parenthesis: eg. ({userdata,}) -> (userdata, )*/
  const {
    _id,
    name,
	lfg_dates,
	lfg_opps,
	lfg_stats,
	prop_title,
	league,
	last_season_stats,
	position,
	team
    
  } = userData; //the stuff has to be named exactly like in the json ; need better names maybe
  //console.log("Displaying userData")
  //console.log(userData)
  
  /*
  const {
	 
	 player_name,
	 year,
	 team,
	 position,
	 last_season_stats
	  
	  
  } = crossUserData */
  
  //console.log("Displaying crossUserData")
  //console.log(crossUserData)
  console.log(name)
  /*^cannot destructure error with 404 and crossUserData may be from not having matching and findable player name for each player in the search results yet*/
  const [isFlipped, setIsFlipped] = useState(false);
	
	/*need to ADD sport/league to playercard, so a switch case function can be made for stats*/
  var max = 0;
  var min = 500;
  var avg = 0;
  
  let graph_data =[]
	
  graph_data = fill_GRAPHDATA(lfg_stats,lfg_dates,lfg_opps)
  
  //avg = find_AVG(lfg_stats);//does this work; no becasue avg for the bar chart would need to be defined before the function 
  
  //removed from first first div  style={CardStyle}
  return (
    <ReactCardFlip
      className="playerCard"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <div
       style={CardStyle}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardFront quick-stats "
      >
	  
	    
        
		<div class="card-frame"></div>
		<div class={"inner-card-frame " + league+"-card" + " front-face"}>
			<div class="stat-player-name-box">
						<div class = "player-name"><strong>{name}</strong></div>							
			</div>
		
		</div>
		
		
		
		
		
		
		<div class = "ss-stat-div">
			<div className="cardLabel front-stat-title">{fullProp(prop_title)}</div>
			
			<>
				<div class = "stat-square ss-hi" >
						<div class = "ss-stat">{find_MAX(lfg_stats)}</div>
						<div class="ss-title">MAX </div>
						
				</div>
				
				<div class = "stat-square ss-avg">
						<div class = "ss-stat">{find_AVG(lfg_stats)}</div>
						<div class="ss-title">AVG </div>
						
				</div>	
				
				
				<div class = "stat-square ss-lo" >
						<div class = "ss-stat">{find_MIN(lfg_stats)}</div>
						<div class="ss-title">MIN </div>
						
				</div>
			</>	
		
		</div>
		
		
		
      </div>
      <div
        style={CardStyle}
        onClick={() => setIsFlipped((prev) => !prev)}
        className="CardBack quick-stats"
      >
        {/* This is the back of the card. */}
		
		
		  
		  
		  
		  
        <div
          style={{
            height: "100%",
            flexDirection: "column",
            alignContent: "space-between"
          }}
		  class = ""
        >
		
		<div class="card-frame"></div>
		
		{/*<div class="corner-circle"></div> is supposed to hold logo, but keep out of back for now because it makes back bigger when flipped*/}
		
		
		
          {/* <div className="cardTitle">{name}</div>
          <div className="cardLabel">Power move</div>
          <div className="cardValue">{powerMove}</div>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}
            value={(Math.random() * 2) + 3}
          /> 
		  
		  also took out Year: {year}*/}
		  
		  
		 
		 
          <div className="cardTitle">{name}</div>
          
		  <div className = "player-season-stats">{makeSeasonTable(last_season_stats,league,prop_title)}</div>
		  
		    <div class = "player-bio-element">Position: {position}  </div>
			<div class = "player-bio-element">Team: {team}</div>
		  
		  
		  <div className="cardLabel">{fullProp(prop_title)}</div>
		  <div className="table-and-graph">
			  <div>{makeGraph(graph_data,max,lfg_stats)}</div>
			  
		  </div>  
		  
		 
		  
		  
		 
		
		
        </div>
      </div>
    </ReactCardFlip>
  );
};

/* removed <br class= "card-br"/> from above cardLabel*/
/* removed <div>{makeTable(lfg_opps,lfg_stats,lfg_dates)}</div> from inside table-and-graph*/

export default PlayerCard;

//https://codesandbox.io/s/react-new --work on online/remotely
////float:left/right changed the game and made me able to put divs side by side


/*


<div>
          
          <div style={{ padding: "5px 0px" }}>
            <strong>{name}</strong>
            
			
          </div>
          
          
          
        </div>
		
		
		
		*/
		
		
		
		
		
		
		
		
		
		
		
/*function tableJSON(user){
	
	
	let size_array = []
	var max = 0
	var min = 500
	var avg = 0
	var total = 0
	//let graph_data = user.lfg_stats
	let graph_data =[]
	
	for(let i = 0; i < user.lfg_stats.length;i++){
		size_array.push(i)
		total+=user.lfg_stats[i]
		if(user.lfg_stats[i] > max){
			max = user.lfg_stats[i]
		}
		if(user.lfg_stats[i] < min){
			min = user.lfg_stats[i]
		}
		graph_data.push({stats: user.lfg_stats[i]}) //fill graph_data and now ready for input into graph 
		//account for negative numbers(eg. only in case of fantasy points)
	}//(ie. [0,1,2,...,5] array for idxs used in map 
	
	var avg = total/size_array.length
	var stat_max = max
	
	
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
	
	//var isFlipped = false;
	
	return (
		<div class = 'stat-box quick-stats front-card card' style={{
                
                
                color: 'black',
                margin: '20px',
                borderRadius: '4px',
                
                padding: '25px'
            }} >
				
				
				<div class="player-info">
					<div class = "name-container">
						
						<h1 class = "player-name">
						{user.name}
						</h1>
						
						<div class="team-name">
							Team: Los Angeles Lakers (LAL)
						</div>
						<div class="team-pos">
							Position: F
						</div>
					
										
					
					</div>
				</div>
				
				
				
				<div class = "stat-square ss-hi" >
						<div class = "ss-stat">{stat_max}</div>
						<div class="ss-title">HI </div>
						
				</div>
				
				<div class = "stat-square ss-avg">
						<div class = "ss-stat">{5}</div>
						<div class="ss-title">AVG </div>
						
				</div>	
				
				
				<div class = "stat-square ss-lo" >
						<div class = "ss-stat">{min}</div>
						<div class="ss-title">LO </div>
						
				</div>	
											
				
				
				
			
		</div>

	)
	
	
}
*/



/*apparently recharts has good documentation in the Examples*/

