import React from 'react'

// import { Route, Switch } from 'react-router';

import './App.css'
import Header from './components/header/header.component';

import HomePage from './pages/homepage.component';
// import NewHomePage from './pages/new-homepage/new-homepage.component';

function App() {
  return (
    
    <div className="App">
      
        <Header></Header>
          <HomePage></HomePage>
        {/* <NewHomePage></NewHomePage> */}
        
    </div>
  );
}


export default App;
