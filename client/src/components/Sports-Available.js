import {Link} from 'react-router-dom'

import nba from '../icons/nba-logo (1).jpg';
import wnba from '../icons/wnba-logo.jpg';
import kbo from '../icons/kbo-logo.jpg'
import b3 from '../icons/big3-logo.jpg'
import cba from '../icons/cba-logo.jpeg'
import lol from '../icons/lol-logo.jpg'



export default function SportsAvailable(){

	return <div class = "sports-available-page">
	
	
	
	<h1> SPORTS AVAILABLE </h1>
		
		
		<br/>
		
		<div class="sports-available-content">
		
		<h2> BASKETBALL </h2>
		<div class="photo-grid">
		  <img src={nba}/>
		  <img src={wnba}/>
		  <img src={b3} width = '200px' height = '200px'/>
		  <img src={cba} width = '200px' height = '200px'/>
		</div>
		<h2> BASEBALL </h2>
		<div class="photo-grid">
		  <img src={kbo} width = '200px' height = '200px'/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  
		</div>
		<h2> ESPORTS </h2>
		<div class="photo-grid">
		  <img src="https://via.placeholder.com/200x200.jpg"/>
		  <img src="https://via.placeholder.com/200x200.jpg"/>
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
		
		
		
		</div>
		
	
	</div>
	
}