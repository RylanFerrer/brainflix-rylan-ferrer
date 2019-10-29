import React from 'react';
import heart from "../assets/icons/SVG/Icon-likes.svg";
import view from '../assets/icons/SVG/Icon-views.svg'
function VideoInfo() {
    return (
        <div className = "video-info">
            <h2 className = "video-info__title">
            BMX Rampage: 2018
            Highlights
            </h2>
            <div className = "video-info__info">
                 <h4 className = "video-info__info-creator">By Red Cow</h4>
                 <h5 className = "video-info__info-date"> 12/11/2000</h5>
            </div>
            <div className = "video-info__info">
                <img className = "video-info__info-view" src = {view}></img>
                <h5 className = "video-info__info-stats"> 1000</h5>
                <img className = "video-info__info-view" src = {heart}></img>
                <h5 className = "video-info__info-stats"> 1000</h5>
            </div>
            
        </div>
    );
}

export default VideoInfo