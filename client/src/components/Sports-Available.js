import {Link} from 'react-router-dom'

import nba from '../icons/nba-logo (1).jpg';
import wnba from '../icons/wnba-logo.jpg';
import kbo from '../icons/kbo-logo.jpg'
import b3 from '../icons/big3-logo.jpg'
import cba from '../icons/cba-logo.jpeg'
import lol from '../icons/lol-logo.jpg'


//width = '200px' height = '200px'


export default function SportsAvailable(){

	return <div class = "sports-available-page">
	
	
	
	<h1> SPORTS AVAILABLE </h1>
		
		
		<br/>
		
		<div class="sports-available-content">
		
		<h2> BASKETBALL </h2>
		<div class="photo-grid">
		  <img class="available" src={nba} height = '85%' width = '80%'/>
		  <img class="available" src={wnba} height = '85%' width = '80%' />
		  <img class="available" src={b3 } height = '85%' width = '80%'/>
		  <img class="available" src={cba} height = '85%' width = '80%'/>
		</div>
		<br/>
		<h2> ESPORTS </h2>
		<div class="photo-grid">
		  <img src={lol} height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  
		</div>
		<br/>
		<h2> BASEBALL </h2>
		<div class="photo-grid">
		  <img class="available" src={kbo} height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		</div>
		<br/>
		<h2> FOOTBALL </h2>
		<div class="photo-grid">
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  <img src="https://via.placeholder.com/200x200.jpg" height = '85%' width = '80%'/>
		  
		</div>
		<br/>
			
		
		</div>
		
	
	</div>
	
}