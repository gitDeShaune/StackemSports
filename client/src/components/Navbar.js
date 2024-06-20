import {Link} from 'react-router-dom'


export default function Navbar() {
	//<Link to = "/" className = "site-title">PICKS.COM</Link>
	/*no more list now it is divs inside of div??*/
	/*edit it at some point to make the image part of the link*/
	return <nav className="nav">
		
		
		
		
		<div class="league-card"> 
					<div class = "league-icon-container">
					<img  class="league-icon" src={require("./nba-sil.png")} />
					</div>
					
					<div class="league-name"><Link class="card-link" to="/nba" ><div class ="inner-league-name">NBA</div> </Link></div> 					
				
		</div>
		<div class="league-card"> 										
					<div class = "league-icon-container">
					<img  class="league-icon" src={require("./mlb-sil.png")} />
					</div>
					
					<div class="league-name"><Link  class="league-link" to="/mlb" ><div class ="inner-league-name">MLB</div></Link></div> 					
				
		</div>
		<div class="league-card"> 										
					<div class = "league-icon-container">
					<img  class="league-icon" src={require("./nhl-sil.png")} />
					</div>
					
					<div class="league-name"><Link class="league-link" to="/nhl" ><div class ="inner-league-name">NHL</div> </Link></div> 					
				
		</div>
		
		<div class="league-card"> 										
					<div class = "league-icon-container">
					<img  class="league-icon" src={require("./nba-sil.png")} />
					</div>
					
					<div class="league-name"><Link class="league-link" to="/wnba" ><div class ="inner-league-name">WNBA</div> </Link></div> 					
				
		</div>
		
		

		</nav>
}


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