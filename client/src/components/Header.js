import {Link} from 'react-router-dom'
//import logo from '../icons/stacked-sports-logo-with-words.png';
import logo from '../icons/stackem-with-text-mid.png';

import {useState, useEffect} from 'react'
import Axios from 'axios'

/*

let kboData;
	
let wnbaData;

let lolData;

let big3Data;

//probably have this include the help links and about and contact at bottom of page

Axios.get("https://stackemsports.onrender.com/api/stats/kbo").then((response) => {
			kboData = response.data
})

Axios.get("https://stackemsports.onrender.com/api/stats/wnba").then((response) => {
				wnbaData = response.data
			})
			
Axios.get("https://stackemsports.onrender.com/api/stats/lol").then((response) => {
				lolData = response.data
			})
			
		
Axios.get("https://stackemsports.onrender.com/api/stats/big3").then((response) => {
				big3Data = response.data
			})		
			
*/
			
export default function Header() {
	//<Link to = "/" className = "site-title">PICKS.COM</Link>
	
	/*
	useEffect(()=>{
		Axios.get("https://stackemsports.onrender.com/api/stats/kbo").then((response) => {
			kboData = response.data
		})//api endpoint rmemeebrr
	}, [])
	


	useEffect(()=>{
			Axios.get("https://stackemsports.onrender.com/api/stats/wnba").then((response) => {
				wnbaData = response.data
			})//api endpoint rmemeebrr
		}, [])
		
		


	useEffect(()=>{
			Axios.get("https://stackemsports.onrender.com/api/stats/lol").then((response) => {
				lolData = response.data
			})//api endpoint rmemeebrr
		}, [])
		


	useEffect(()=>{
			Axios.get("https://stackemsports.onrender.com/api/stats/big3").then((response) => {
				big3Data = response.data
			})//api endpoint rmemeebrr
		}, [])
	*/
	
	
	return <div className="header">
		
		
		
		
		
		<img src={logo} alt="Logo" /> 
		
		
		
	</div>
}

/* <svg width="200" xmlns="http://www.w3.org/2000/svg"> */

/*  <img href="src/icons/youtube-logo.png" height="200" width="200" /> */

/*TO-DOS: make header logo a link to homepage while satying centered and inside of header*/

/*need variables for site colors constants, to be referenced in other css files*/