import React from 'react'
import playbtn from "../assets/icons/SVG/Icon-play.svg";
import screenbtn from "../assets/icons/SVG/Icon-fullscreen.svg";
import volumebtn from "../assets/icons/SVG/Icon-volume.svg";

export default function Video({data}) {
    return (
            <div className = "video-container">
            <video className ="video" poster = {data.image} controls>
            <source src={data.media} type="video/mp4"/>
            </video>
            
            </div>
          
        
    );
}
