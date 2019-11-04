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
        <Route path = "/" exact render ={() => (
          <MainSection id = "1af0jruup5gu"></MainSection>
        )}/> 
        <Route path = "/videos/:videoID" render ={(props) => (
          <div>
    
          <MainSection id = {props.match.params.videoID} ></MainSection>
          </div>

        )} />
      </Switch>
    </div>

  );
}

export default App;
