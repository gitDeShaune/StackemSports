import {Link} from 'react-router-dom'

//import logo_footer from '../icons/stacked-sports-logo-outline-with-words.svg';

import logo_footer from '../icons/stackem-with-text-mid-footer.png';


//probably have this include the help links and about and contact at bottom of page


/*imported footer from https://web-eau.net/en/blog/10-best-footer-html-css-snippets */
/*no longer this ^; https://mdbootstrap.com/snippets/standard/mdbootstrap/2885047#html-tab-view*/


/*deleting my-5 from top div(container)makes the bottom setion and cards section connect*/
export default function Footer() {
	//<Link to = "/" className = "site-title">PICKS.COM</Link>
	//changed from container to footer-container
	return <div class="footer-container ">
	
	
  <footer class = "text-black" >
   
    <div class = "footer-container">
      
      <section class="mt-5">
        
		<hr class="my-5" />
		
        <div class="row text-center d-flex justify-content-center">
          
          <div class="col-md-2">
            <h6 class="text-uppercase ">
			  
			  <Link to="/about" class = "footer-menu-text">About us</Link>
            </h6>
          </div>
        
          <div class="col-md-2">
            <h6 class="text-uppercase ">
              <Link to="/privacy-policy" class = "footer-menu-text">Privacy Policy</Link>
            </h6>
          </div>
         
          <div class="col-md-2">
            <h6 class="text-uppercase">
              <Link to="/sports-available" class = "footer-menu-text">Sports Available</Link>
            </h6>
          </div>
         
         
          <div class="col-md-2">
            <h6 class="text-uppercase ">
              <Link to="/contact-us" class="footer-menu-text">Contact Us/ Request A Player</Link>
            </h6>
          </div>
        
        </div>
       
      </section>
      

      <hr class="my-5" />
		
		
      
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
			
          <div class="col-lg-8">
			
			<div class="logo-footer">
				<img src={logo_footer}  /> 
			</div>
			<div>
            <p>
			Stack'em Sports is dedicated to giving our fellow sports enthusiasts the stats to go with their favorite players. 
			We currently provide stats for several leagues from basketball to rugby to esports, including the NBA, MLS, NFL, MLB, League of Legends, and more. 
	
            </p>
			</div>	
          </div>
        </div>
      </section>

      <section class="text-center footer-links mb-5">
		
		<a href="https://buymeacoffee.com/stackemsports" target="_blank" class="bmc" ></a>
		<a href="https://www.reddit.com/r/StackemSports/" target="_blank" class="fa fa-reddit" ></a>
        <a href="https://x.com/STACKEMSPORTS" target="_blank" class="fa fa-twitter"></a>
        
      </section>
	  
	  Copyright ©2024  
	  <b>
      <a class="text-black text-uppercase " href="https://stackemsports.com/"
         > Stackemsports.com</a
        ></b>
   
    </div>
  
    
   
  </footer>
  
</div>
	
	
	
	
	


}

/*	
	<div className="footer">
		
		
		
		
		
	</div>
}
*/








/*

<ul>
			<li> 
				<Link to="/about">About</Link>
				
			</li>
			<li> 
			
				<Link to="/"><img src="src/icons/baseball_icon.png"/>Homefdfd</Link>
			</li>
			
		
		</ul>



*/