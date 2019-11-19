import React from 'react'


export default function Video({data}) {
    return (
            <div className = "video-container">
            <video className ="video" poster = {data.image} controls>
            <source src={`${data.video}`} type="video/mp4"/>
            </video>
            
            </div>
          
        
    );
}
