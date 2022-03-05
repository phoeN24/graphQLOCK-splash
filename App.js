
import React from 'react';
import NavBar from './src/components/NavBar'
import Team from './src/components/theTeam'
import './src/styles.css'
const App = props => {
  return(
    <body>
      <div className="navbar">
        <NavBar/>
      </div>
      
      <div className='team'>
       <Team/>
      </div>
    </body>
  )
}


export default App;
