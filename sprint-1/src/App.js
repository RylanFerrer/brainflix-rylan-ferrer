import React from 'react';
import "./styles/main.css"
import logo from './logo.svg';
import Header from './components/Header';
import Video from './components/Video';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Video></Video>
    </div>
  );
}

export default App;
