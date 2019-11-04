import React from 'react'
import playbtn from "../assets/icons/SVG/Icon-play.svg";
import screenbtn from "../assets/icons/SVG/Icon-fullscreen.svg";
import volumebtn from "../assets/icons/SVG/Icon-volume.svg";

export default function Video({data}) {
    return (
            <div className = "video-container">
            <video className ="video" poster = {data.image}>
            <source src={data.media} type="video/mp4"/>
            </video>
            <div className = "video-controls">
                <div className = "video-controls__icon-container">
                    <img  className = "video-controls__play-btn" src = {playbtn} alt = "play"></img>
                </div>
                <div className = "video-controls__slider-container">
                    <input  className = "video-controls__slider"type = "range"/> 
                    <p className = "video-controls__slider-time ">0:00 / {data.duration}</p>
                </div>
                <div className = " video-controls__icon-container video-controls__icon-container--multiple">
                    <img alt = "screen" src = {screenbtn} className = "video-controls__screen-btn"></img>
                    <img alt = "volume" src = {volumebtn}></img>
                </div>
            </div>
        </div>
          
        
    );
}
