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
      <Header></Header>
      <Switch>
        <Route path = "/" exact render ={(props) => (
          <MainSection  {...props} ></MainSection>
        )}/> 
        <Route path = "/videos/:videoID" render ={(props) => (
          <div>
    
          <MainSection {...props} ></MainSection>
          </div>

        )} />
      </Switch>
    </div>

  );
}

export default App;
