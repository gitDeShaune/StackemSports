//OLD FUNCTIONS

//DELETED form client package json : "homepage":"http://gitdeshaune.github.io/stackemsports"

/* used to be in sports pages (ie. Mlb, Nba.js)*/
function graphJSON(user){
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
	
	return (
	<div class = 'stat-box quick-stats back-card card' >
		<div class = 'graph-container'>
					{graph}
		</div>
	</div>
	)
	
}
function tableJSON(user){
	/*let chart_n_stuff = chartJSON(user)
	
	let max = chart_n_stuff[1]
	console.log(max)
	
	let size_array = chart_n_stuff[0]*/
	
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
						<div class = "ss-stat">{avg}</div>
						<div class="ss-title">AVG </div>
						
				</div>	
				
				
				<div class = "stat-square ss-lo" >
						<div class = "ss-stat">{min}</div>
						<div class="ss-title">LO </div>
						
				</div>	
											
				
				
				
			
		</div>

	)
	
	/*return (
	    <div>
			SAMPEL CARD FRONT OR SOMETHING
			<h1>SAMPLLEEE </h1>
		
		
		</div>
	
	
	
	)*/
	
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
			
			<h1>
					{user.name}
					</h1>
					<div class = 'graph-container'>
					{graph}
					</div>
			
		
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
