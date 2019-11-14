import React from 'react'
import VideoInfo from "./VideoInfo";
import Video from './Video';
import CommentsSection from "./CommentsSection";
import NewVideoSection from "./NewVideoSection";
import  axios from 'axios';



export default class MainSection extends React.Component {

  componentDidMount() {
    axios.get(`/videos`).then(res => {
      
      this.setState({currentId: res.data[0].id ,sideVideos:res.data})
    }).then( res => {
      axios.get(`/videos/${this.state.currentId}`).then(res => {
        this.setState({MainVideo: res.data[0]});
      })
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.videoID !== prevProps.match.params.videoID) { 
      axios.get(`/videos/${this.props.match.params.videoID}`).then(res => {
        
        this.setState({MainVideo: res.data[0]});
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
