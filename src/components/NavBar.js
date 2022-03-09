import React from 'react';
import logo from '../assets/gqlLogo.png'
//import {  Link } from "react-router-dom";

const navbar = () =>{
  return (
  <ul id="navbar">
    <li>
      <img id="logo" src={logo}/>
      <b id="title">GraphQLock</b>
    </li>
    <li id="github" >
      <a href="https://github.com/oslabs-beta/graphQLock" target="_blank" class="button">GitHub</a>
    </li>
  </ul>
  );
};

export default navbar;