import React from 'react';
import "./styles/main.css"
import logo from './logo.svg';
import Header from './components/Header';
import Video from './components/Video';
import VideoInfo from "./components/VideoInfo";
import CommentsForm from "./components/CommentsForm";
import NewVideoSection from "./components/NewVideoSection";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Video></Video>
      <VideoInfo></VideoInfo>
      <CommentsForm></CommentsForm>
      <NewVideoSection></NewVideoSection>
    </div>
  );
}

export default App;
