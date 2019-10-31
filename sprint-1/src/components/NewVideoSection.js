import React from 'react'
import VideoPreview from './VideoPreview';

function NewVideoSection(props) {
  
    let sideVideos = props.sideVideos.map( (video,index) => {
        return <VideoPreview key = {index} title = {video.title} image = {video.image} channel = {video.channel}> </VideoPreview>
    });
    return (
        <div className = "new-video">
            <h5 className = "new-video__title"> New Videos</h5>
            {sideVideos}
        </div>
    );
}

export default NewVideoSection