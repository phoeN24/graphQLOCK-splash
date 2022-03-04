import React from 'react';
//import {  Link } from "react-router-dom";

const navbar = () =>{
  return (
  <div>
    <li>
      <h3>logo</h3>
    </li>
    <li>
      <form action="https://github.com/oslabs-beta/graphQLock" target="_blank">
        <button id="github" type="submit">Github</button>
      </form>
    </li>
  </div>
  );
};

export default navbar;