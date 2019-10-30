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
            <div className = "video-info__info video-info__info--right">
                <img className = "video-info__info-view" src = {view}></img>
                <h5 className = "video-info__info-stats"> 1000</h5>
                <img className = "video-info__info-view " src = {heart}></img>
                <h5 className = "video-info__info-stats"> 1000</h5>
            </div>
            <hr className = "video-info__divider"></hr>
            <p className = "video-info__info-details">
            On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the
            doors off what is possible on two wheels, unleashing some of the biggest
            moments the sport has ever seen. While mother nature only allowed for one full
            run before the conditions made it impossible to ride, that was all that was needed
            for event veteran Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
            </p>
        </div>
    );
}

export default VideoInfo