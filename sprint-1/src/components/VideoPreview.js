import React from 'react';
import placeholder from "../assets/images/video-list-1.jpg"
function VideoPreview() {
    return (
        <div className = "new-video__container">
            <img className = "new-video__container-img" src = {placeholder}></img>
            <div className = "new-video__container-info">
                <p className = "new-video__container-info-title">This is a title for a video...</p>
                <p className = "new-video__container-info-author">Rylan Ferrer</p>
            </div>
        </div>
    );
}


export default VideoPreview