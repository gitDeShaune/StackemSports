import {Link} from 'react-router-dom'

import logo_footer from '../icons/stacked-sports-logo-outline-with-words.svg';

//probably have this include the help links and about and contact at bottom of page


/*imported footer from https://web-eau.net/en/blog/10-best-footer-html-css-snippets */
/*no longer this ^; https://mdbootstrap.com/snippets/standard/mdbootstrap/2885047#html-tab-view*/


/*deleting my-5 from top div makes the bottom setion and cards section connect*/
export default function Footer() {
	//<Link to = "/" className = "site-title">PICKS.COM</Link>
	return <div class="container my-5">
  
  <footer class = "text-black" >
   
    <div class="container footer-container">
      
      <section class="mt-5">
        
        <div class="row text-center d-flex justify-content-center">
          
          <div class="col-md-2">
            <h6 class="text-uppercase ">
			  
			  <Link to="/about" class = "text-black">About us</Link>
            </h6>
          </div>
        
          <div class="col-md-2">
            <h6 class="text-uppercase ">
              <Link to="/privacy-policy" class = "text-black">Privacy Policy</Link>
            </h6>
          </div>
         
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <Link to="/sports-available" class = "text-black">Sports Available</Link>
            </h6>
          </div>
         
         
          <div class="col-md-2">
            <h6 class="text-uppercase ">
              <a href="#" class="text-black">Contact Us/ Request A Player</a>
            </h6>
          </div>
        
        </div>
       
      </section>
      

      <hr class="my-5" />
	
      
      <section class="mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
		  
			<img src={logo_footer} alt="Logo-Footer" /> 
			
            <p>
			StackedSports is dedicated to giving our fellow sports fans the stats to go with their favorite players. 
			We currently provide stats for several leagues from basketball to rugby to esports, including the NBA, MLS, NFL, MLB, League of Legends, and more. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
            </p>
					
          </div>
        </div>
      </section>

      <section class="text-center mb-5">
        <a href="" class="text-black me-4">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-google"></i>
        </a>
        <a href="" class="text-black me-4">
          <i class="fab fa-instagram"></i>
        </a>
        
      </section>
	  
	  Copyright ©2024  
      <a class="text-black" href="https://mdbootstrap.com/"
         > Stackedsports.com</a
        >
   
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