import React from 'react';
import {Link} from 'react-router-dom'
function VideoPreview(props) {
    return (
        <div className = "new-video__container">
            <Link to = {`/videos/${props.id}`}><img alt = "video" className = "new-video__container-img" src = {props.image}></img></Link>
            <div className = "new-video__container-info">
                <p className = "new-video__container-info-title">{props.title}</p>
                <p className = "new-video__container-info-author">{props.channel}</p>
            </div>
        </div>
    );
}


export default VideoPreview