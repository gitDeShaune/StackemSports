import {Link} from 'react-router-dom'

import collection_image from '../icons/sports-cards-collection.jpg';

export default function About(){

	return <div>
	
	
	
	<h1 class = "about-us-header">About Us</h1>
		
		
		<div class="page-image-container">
			<img src={collection_image}  /> 
		</div>
		
		<br/>
		
		
		
		<div class="about-us-text-container">
			<section id="about-us">
        

				<h2 class = "about-us-header" >Welcome to Stack'em Sports</h2>
				<p>At Stack'em Sports, we are passionate about the numbers behind the games. Founded with a mission to provide accessible and accurate player statistics, we track and deliver comprehensive data for a wide range of sports and esports. Whether you're a fan of football, basketball, baseball, rugby, tennis, or esports like League of Legends and Valorant, Stack'em Sports is your go-to source for detailed player stats.</p>

				<h2 class = "about-us-header">Our Mission</h2>
				<p>Our goal is simple: to make player statistics accessible and accurate for all sports enthusiasts. We believe that data enhances the experience of following your favorite teams and players, allowing for deeper insights and greater enjoyment of the games.</p>

				<h2 class = "about-us-header">What We Offer</h2>
				<p>At Stack'em Sports, we offer a free platform where users can access a wealth of player statistics across various sports. Our data covers:</p>
				<ul>
					<li>Football</li>
					<li>Basketball</li>
					<li>Baseball</li>
					<li>Rugby</li>
					<li>Tennis</li>
					<li>Esports (including League of Legends and Valorant)</li>
				</ul>
				<p>We strive to keep our data up-to-date and comprehensive, ensuring that you have the most reliable information at your fingertips.</p>

				<h2 class = "about-us-header">Why Choose Stack'em Sports?</h2>

				<h3>Accurate and Reliable Data</h3>
				<p>Our team is dedicated to collecting and verifying data to ensure accuracy. We understand the importance of trustworthy statistics in sports analysis and fan engagement.</p>

				<h3>Comprehensive Coverage</h3>
				<p>From traditional sports to the rapidly growing world of esports, we provide extensive coverage that caters to diverse interests and preferences.</p>

				<h3>User-Friendly Access</h3>
				<p>We believe that everyone should have access to quality sports data without barriers. That's why our platform is free to use, with easy-to-navigate features that make finding the stats you need a breeze.</p>

				<h2>Our Team</h2>
				<p>Our team is comprised of sports enthusiasts, data analysts, and tech experts who share a common love for sports and a commitment to excellence. We work tirelessly to gather, analyze, and present data in a way that adds value to your sports experience.</p>

				<h2 class = "about-us-header">Get in Touch</h2>
				<p>Have questions or feedback? We'd love to hear from you! Contact us at <a href="mailto:info@stackemsports.com">info@stackemsports.com</a> for support or with any inquiries about our site and the data we provide.</p>
				<p>If there's a sport or player you think should be included in our stats cards, don't hesitate to let us know. We are always looking to expand and improve our offerings based on user requests and feedback.</p>
			</section>

		</div>
		
		
	
	</div>
	
}

/*JUST COPY 365scores website code for About Page and Home Page etc!!!!*/


/*   <img src={require('./baseball_card.png').default} />  */