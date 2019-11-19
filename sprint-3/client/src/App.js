import React from 'react';
import "./styles/main.css"
import Header from './components/Header';
import MainSection from "./components/MainSection";
import Upload from "./components/Upload";
import './App.css';
import {Route,Switch} from "react-router-dom"

function App() {
 
  return (

    <div className="App">
      <Header/>
      <Switch>
        <Route path = "/upload" component = {Upload}/>
        
        <Route path = "/" exact render ={(props) => (
          <MainSection  {...props} />
        )}/> 
        <Route path = "/videos/:videoID" render ={(props) => (
          <MainSection {...props} />
        )} />
      </Switch>
    </div>

  );
}

export default App;
