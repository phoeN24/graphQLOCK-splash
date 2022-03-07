import React from 'react';
import logo from '../assets/gqlLogo.png'
//import {  Link } from "react-router-dom";

const navbar = () =>{
  return (
  <ul id="navbar">
    <li>
      <img id="logo" src={logo}/>
      <b id="title">graphQLock</b>
    </li>
    <li id="github" >
      <a href="https://github.com/oslabs-beta/graphQLock" target="_blank">Github</a>
    </li>
  </ul>
  );
};

export default navbar;