import React from 'react'
import media from "../assets/Video/brainstation.mp4";
import poster from "../assets/images/video-list-0.jpg";
import playbtn from "../assets/icons/SVG/Icon-play.svg";
import screenbtn from "../assets/icons/SVG/Icon-fullscreen.svg";
import volumebtn from "../assets/icons/SVG/Icon-volume.svg";

export default function Video() {
    return (
        <div className = "video-container">
            <video className ="video" poster = {poster}>
            <source src={media} type="video/mp4"/>
            </video>
            <div className = "video-controls">
                <div className = "video-controls__icon-container">
                    <img  className = "video-controls__play-btn" src = {playbtn}></img>
                </div>
                <div className = "video-controls__slider-container">
                    <input  className = "video-controls__slider"type = "range"/> 
                    <p className = "video-controls__slider-time ">0:00 / 4:42</p>
                </div>
                <div className = " video-controls__icon-container video-controls__icon-container--multiple">
                    <img  src = {screenbtn} className = "video-controls__screen-btn"></img>
                    <img src = {volumebtn}></img>
                </div>
            </div>
        </div>
          
        
    );
}
