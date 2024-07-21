import {Link} from 'react-router-dom'

import Axios from 'axios'

import React from 'react'

import {useState, useEffect} from 'react'






export default function ContactUs(){
	
	const [txt,setTxt] = useState("")
	
	const createComment = () => {
		Axios.post("https://stackemsports.onrender.com/api/UI/create-comment", {txt,});//.then((response) =>
		//alert("USER CREATED");/*dont really care about response*/
		//});
		
	};

	return <div class = "contact-us-page">
	
	
	
	<h1 class = "contact-header "> CONTACT US </h1>
		
		
	

		<div class = "contact-us-container">
		
			<p> You can request to add a sports leauge, new players, and any other questions by emailing us at <strong>info@stackemsports.com</strong></p>
		
		
			<div>
				<input type="text" placeholder="Say something..." onChange={(event) => {setTxt(event.target.value); }} />
				<button onClick={createComment}> Send </button>
			</div>
		
		</div>
	
	</div>
	
}