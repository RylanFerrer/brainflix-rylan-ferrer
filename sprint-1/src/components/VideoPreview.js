import React from 'react';

function VideoPreview(props) {
   
    return (
        <div className = "new-video__container">
            <img alt = "video" className = "new-video__container-img" src = {props.image}></img>
            <div className = "new-video__container-info">
                <p className = "new-video__container-info-title">{props.title}</p>
                <p className = "new-video__container-info-author">{props.channel}</p>
            </div>
        </div>
    );
}


export default VideoPreview