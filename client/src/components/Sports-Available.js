import {Link} from 'react-router-dom'

import nba from '../icons/nba-logo (1).jpg';
import wnba from '../icons/wnba-logo.jpg';



export default function SportsAvailable(){

	return <div class = "sports-available-page">
	
	
	
	<h1> SPORTS AVAILABLE </h1>
		
		
		<br/>
		
		
		
		<h2> BASKETBALL </h2>
		<div class="photo-grid">
		  <img src={nba}/>
		  <img src={wnba}/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  
		</div>
		<h2> FOOTBALL </h2>
		<div class="photo-grid">
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  
		</div>
		<h2> SOCCER </h2>
		<div class="photo-grid">
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  
		</div>
		<h2> BASEBALL </h2>
		<div class="photo-grid">
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  
		</div>
		<h2> ESPORTS </h2>
		<div class="photo-grid">
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  
		</div>
		
	
	</div>
	
}