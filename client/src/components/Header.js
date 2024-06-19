import {Link} from 'react-router-dom'
//import logo from '../icons/stacked-sports-logo-with-words.png';
import logo from '../icons/stackem-with-text-mid.png';

//probably have this include the help links and about and contact at bottom of page

export default function Header() {
	//<Link to = "/" className = "site-title">PICKS.COM</Link>
	return <div className="header">
		
		
		
		
		
		<img src={logo} alt="Logo" /> 
		
		
		
	</div>
}

/* <svg width="200" xmlns="http://www.w3.org/2000/svg"> */

/*  <img href="src/icons/youtube-logo.png" height="200" width="200" /> */

/*TO-DOS: make header logo a link to homepage while satying centered and inside of header*/

/*need variables for site colors constants, to be referenced in other css files*/