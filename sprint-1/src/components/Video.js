import React from 'react'
import media from "../assets/Video/brainstation.mp4";

export default function Video() {
    return (
        <div>
        
        <video className ="video" controls>
        <source src={media} type="video/mp4"/>
        </video>
        
        </div>
          
        
    );
}
