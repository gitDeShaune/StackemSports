import {Link} from 'react-router-dom'
//import logo from '../icons/stacked-sports-logo-with-words.png';
import logo from '../icons/stackem-with-text-mid.png';

import hambo from '../icons/hamburger-icon.webp';

import {useState, useEffect} from 'react'
import Axios from 'axios'

import { slide as Menu } from 'react-burger-menu'


//onclick={closeNav()}

const barStyle240 = {
  width: "260px",
};

const barStyle0 = {
  width: "0px",
};

var barStyle = barStyle240;

const Sidebar =(props) =>{
	
	
	const [sideSize, setSideSize] = useState(barStyle0);
	//style={CardStyle}
     //   onClick={() => setIsFlipped((prev) => !prev)}
	return <>
		<div class = "hambo"> <img src={hambo}  width="40" height="40" onClick={()=> setSideSize(barStyle240)}/></div>
		<div id="mySidenav" class="sidenav" style={sideSize}>
			<button class="closebtn" onClick={()=> setSideSize(barStyle0)}>&times;</button>
			  <a href="/about">About Us</a>
			  <a href="/sports-available">Sports Available</a>
			  <a href="/contact-us">Contact Us/ Request A Player</a>
			</div>
			
			
	
	</>
	
	
	
	
	
	
}
			
export default function Header() {
	//<Link to = "/" className = "site-title">PICKS.COM</Link>
	
	/*showSettings(event){
		event.preventDefault();
			//.
			//.
			//.
	}*/
	
	
	
	return <div className="header">
		
		
		
		
		<Sidebar class = "hambo"/>
		
		<div  class = "header-logo" ><a href ='/wnba'> <img width="90%" height = "60" src={logo} alt="Logo"/> </a></div>
		
		
		
		
		
	</div>
}


/*

<Menu  left width={ 140 }>
			<a id="home" className="menu-item" href="/">Home</a>
			<a id="about" className="menu-item" href="/about-us">About</a>
			<a id="contact" className="menu-item" href="/contact">Contact</a>
			<a  className="menu-item--small" href="">Settings</a>
	    </Menu>

	



*/
/*<li class="hideOnMobile"><a href="#">About Us</a></li> in second ul

/* <svg width="200" xmlns="http://www.w3.org/2000/svg"> */

/*  <img href="src/icons/youtube-logo.png" height="200" width="200" /> */

/*TO-DOS: make header logo a link to homepage while satying centered and inside of header*/

/*need variables for site colors constants, to be referenced in other css files*/


/*

<nav>
		<ul class="sidebar " >
			
			<li onclick= {hideSidebar()}><a href="#"> <img src={require("./nba-sil.png")}/> </a></li>
			<li><a href="#">About Us</a></li>
			<li><a href="#">HJHj shdjdh</a></li>
			<li><a href="#">Zzzz zdsds </a></li>
			
		</ul>
		
		
		
		<ul>     
			
			<li class="menu-button" onclick= {showSidebar()} ><a href="#"><img src={require("./nba-sil.png")}/></a></li>
		</ul>
	</nav>
	
	
	*/