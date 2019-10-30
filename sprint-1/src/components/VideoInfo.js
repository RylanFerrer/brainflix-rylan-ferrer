import React from 'react';
import heart from "../assets/icons/SVG/Icon-likes.svg";
import view from '../assets/icons/SVG/Icon-views.svg'
function VideoInfo(props) {
   let timestamp =  new Date(props.timestamp * 1000)
   let date = `${timestamp.getMonth() + 1}/${timestamp.getDate()}/${timestamp.getFullYear()}`
    console.log( );
    return (
        <div className = "video-info">
            <h2 className = "video-info__title">
                {props.title}
            </h2>
            <div className = "video-info__info">
                 <h4 className = "video-info__info-creator">By {props.channel}</h4>
                 <h5 className = "video-info__info-date"> {date}</h5>
            </div>
            <div className = "video-info__info video-info__info--right">
                <img  alt = "view"className = "video-info__info-view" src = {view}></img>
                <h5 className = "video-info__info-stats"> {props.likes}</h5>
                <img alt = "view" className = "video-info__info-view " src = {heart}></img>
                <h5 className = "video-info__info-stats"> {props.views}</h5>
            </div>
            <hr className = "video-info__divider"></hr>
            <p className = "video-info__info-details">
                {props.description}
            </p>
        </div>
    );
}

export default VideoInfo