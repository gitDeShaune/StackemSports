import {Link} from 'react-router-dom'

import React, { useState } from 'react';




export default function Navbar() {
	//<Link to = "/" className = "site-title">PICKS.COM</Link>
	/*no more list now it is divs inside of div??*/
	/*edit it at some point to make the image part of the link*/
	
	//should use useEffect or jut a function and a value? which one is quicker/less taxing
	
	
		

	
	return <nav className="nav">
		
		
		
		
		<Link  to="/big3" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./nba-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">BIG3</div></div> 	
					
					
			</div>
		</Link>
		
		
		
		<Link  to="/wnba" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./nba-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">WNBA</div></div> 	
					
					
			</div>
		</Link>
		
		
		
		
		
		
		<Link  to="/lol" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./lol-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">LOL</div></div> 	
					
					
			</div>
		</Link>
		
		<Link  to="/kbo" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./mlb-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">KBO</div></div> 	
					
					
			</div>
		</Link>


		
		</nav>
		
	
}



/*


<Link  to="/kbo" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./mlb-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">KBO</div></div> 	
					
					
			</div>
		</Link>











<Link  to="/mlb" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./mlb-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">MLB</div></div> 	
					
					
			</div>
		</Link>

<Link  to="/nba" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./nba-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">NBA</div></div> 	
					
					
			</div>
		</Link>
		
		

<Link  to="/mlb" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./mlb-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">MLB</div></div> 	
					
					
			</div>
		</Link>





*/

//Don't include MLB and whatnot til the data is available

/*


<Link  to="/mlb" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./mlb-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">MLB</div></div> 	
					
					
			</div>
		</Link>
		
		<Link  to="/nhl" >
			<div class="league-card"> 
					
						<div class = "league-icon-container">
						<img  class="league-icon" src={require("./nhl-sil.png")} />
						</div>
						
						<div class="league-name"><div class ="inner-league-name">NHL</div></div> 	
					
					
			</div>
		</Link>






*/


/*
<div class="league-card"> 										
					<div class = "league-icon-container">
					<img  class="league-icon" src={require("./nba-sil.png")} />
					</div>
					
					<div class="league-name"><Link class="league-link" to="/wnba" ><div class ="inner-league-name">WNBA</div> </Link></div> 					
				
		</div>

*/

/*



<ul class="league-nav">
			<li class="league-card"> 
				<Link to="/nba">
				<img src="basketball_icon.png"/>
				<div class="league-name">NBA</div> 
				</Link>
				
			</li>
			<li class="league-card"> 
			
				<Link to="/mlb">
				
				<div class="league-name">MLB</div> 
				</Link>
				
			</li>
			<li> 
			
				<Link to="/nhl"><img src="icons/baseball_icon.png"/>NHL</Link>
			</li>
			<li> 
			
				<Link to="/home"><img src="src/icons/baseball_icon.png"/>HOME</Link>
			</li>
		</ul>





*/