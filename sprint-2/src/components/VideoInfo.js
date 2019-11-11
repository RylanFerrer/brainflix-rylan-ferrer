import React from 'react';
import heart from "../assets/icons/SVG/Icon-likes.svg";
import view from '../assets/icons/SVG/Icon-views.svg'
function VideoInfo({data}) {
   let Newtimestamp =  new Date(data.timestamp)
   let date = `${Newtimestamp.getMonth() + 1}/${Newtimestamp.getDate()}/${Newtimestamp.getFullYear()}`
    return (
        <div className = "video-info">
            <h2 className = "video-info__title">
                {data.title}
            </h2>
            <div className = "video-info__info">
                 <h4 className = "video-info__info-creator">By {data.channel}</h4>
                 <h5 className = "video-info__info-date"> {date}</h5>
            </div>
            <div className = "video-info__info video-info__info--right">
                <img  alt = "view" className = "video-info__info-view" src = {view}></img>
                <h5 className = "video-info__info-stats"> {data.likes}</h5>
                <img alt = "view" className = "video-info__info-view " src = {heart}></img>
                <h5 className = "video-info__info-stats"> {data.views}</h5>
            </div>
            <hr className = "video-info__divider"></hr>
            <p className = "video-info__info-details">
                {data.description}
            </p>
        </div>
    );
}

export default VideoInfo