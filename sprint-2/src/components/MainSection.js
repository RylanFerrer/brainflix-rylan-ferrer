import React from 'react'
import VideoInfo from "./VideoInfo";
import Video from './Video';
import CommentsSection from "./CommentsSection";
import NewVideoSection from "./NewVideoSection";
import media from "../assets/Video/brainstation.mp4";
import poster from "../assets/images/video-list-0.jpg";
import  axios from 'axios';



export default class MainSection extends React.Component {

  componentDidMount() {
    axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.id}?api_key=%3C12345%3E`).then(res => {
      this.setState({MainVideo:res.data})
    });
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=%3C12345%3E`)
      .then(res => {
        this.setState({sideVideos: res.data})  
      });
  }
    state = {
        MainVideo: {},
        sideVideos: []
    }
 
    render() {
    return (
        <>
        <Video data = {this.state.MainVideo}> </Video>
        <div className = "grid-container">
            <div className = "grid-container__left">
            <VideoInfo  data = {this.state.MainVideo}  ></VideoInfo>
            <CommentsSection commentInfo = {this.state.MainVideo.comments}></CommentsSection>
            </div>
            <NewVideoSection sideVideos = {this.state.sideVideos} currentId = {this.state.MainVideo.id}></NewVideoSection>
        </div>
        </>
    )
    }
}
