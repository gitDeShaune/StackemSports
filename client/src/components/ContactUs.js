import {Link} from 'react-router-dom'

import Axios from 'axios'

import React from 'react'

import {useState, useEffect} from 'react'






export default function ContactUs(){
	
	const [txt,setTxt] = useState("")
	
	const createComment = () => {
		if (txt.trim().length > 5){
			Axios.post("https://stackemsports.onrender.com/api/UI/create-comment", {txt,})//.then((response) =>
		
		}
		document.getElementById("message").value= '';
		return false;
		
	};

	return <div class = "contact-us-page">
	
	
	
	<h1 class = "contact-header "> CONTACT US </h1>
		
		
	

		<div class = "contact-us-container">
		
			<p> You can request to add a sports leauge, new players, or submit any other questions and suggestions by filling in the textbox or by emailing us directly at <strong>info@stackemsports.com</strong></p>
		
		
			<form id = "msg-box"  onsubmit = 'createComment;return false;'>
				<textarea id = "message" width = '60%'  placeholder="Say something..." onChange={(event) => {setTxt(event.target.value); }} />
				
			</form>
				<button id = 'send-msg' type = "button" onClick={createComment}>Send</button>
		
		</div>
	
	</div>
	
}