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
    axios.get(`https://project-2-api.herokuapp.com/videos?api_key=%3C12345%3E`).then(res => {
      
      this.setState({currentId: res.data[0].id ,sideVideos:res.data})
    }).then( res => {
      axios.get(`https://project-2-api.herokuapp.com/videos/${this.state.currentId}?api_key=%3C12345%3E`).then(res => {
        this.setState({MainVideo: res.data});
      })
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.videoID !== prevProps.match.params.videoID) { 
      axios.get(`https://project-2-api.herokuapp.com/videos/${this.props.match.params.videoID}?api_key=%3C12345%3E`).then(res => {
        this.setState({MainVideo: res.data});
      })
    }
  }

    state = {
        currentId: "",
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
