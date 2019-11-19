import React from 'react'
import VideoInfo from "./VideoInfo";
import Video from './Video';
import CommentsSection from "./CommentsSection";
import NewVideoSection from "./NewVideoSection";
import  axios from 'axios';



export default class MainSection extends React.Component {

  componentDidMount() {
    axios.get(`http://localhost:5000/videos`).then(res => {
      
      this.setState({currentId: res.data[0].id ,sideVideos:res.data})
    }).then( res => {
      axios.get(`http://localhost:5000/videos/${this.state.currentId}`).then(res => {
        this.setState({MainVideo: res.data[0]});
      })
    })
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.videoID !== prevProps.match.params.videoID) { 
      axios.get(`http://localhost:5000/videos/${this.props.match.params.videoID}`).then(res => {
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
            <VideoInfo  data = {this.state.MainVideo} />
            <CommentsSection videoId = {this.state.MainVideo.id} commentInfo = {this.state.MainVideo.comments}/>
            </div>
            <NewVideoSection sideVideos = {this.state.sideVideos} currentId = {this.state.MainVideo.id}/>
        </div>
        </>
    )
    }
}
