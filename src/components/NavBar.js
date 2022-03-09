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
    <li id="medium" >
      <a href="https://medium.com/@drakeocinco/graphqlock-secure-your-graphql-application-with-ease-e7bc3b85baaa" target="_blank" class="button">Medium Article</a>
    </li>
  </ul>
  );
};

export default navbar;