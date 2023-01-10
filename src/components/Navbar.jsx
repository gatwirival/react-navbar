import React from 'react';
import {  Link } from "react-router-dom";
import "./Navbar.css"

const navbar= () =>{
  return (
    <header class="header">
		<div class="left">
			<a href="/home">SALI</a>
		</div>
  <div class="mid">
		<ul class="navbar">

    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/events">Events</Link>
    </li>
    <li>
      <Link to="/supportus">Support Us</Link>
      </li>
      <li>
      <Link to="/news">News</Link>
      </li>
      </ul>
     </div>


    </header>
  );
}
export default navbar;
