import React from 'react'
import VideoPreview from './VideoPreview';
import placeholder from "../assets/images/video-list-1.jpg"
import thumbnailOne from "../assets/images/video-list-2.jpg"
import thumbnailTwo from "../assets/images/video-list-3.jpg"
import thumbnailThree from "../assets/images/video-list-4.jpg"
import thumbnailFour from "../assets/images/video-list-5.jpg"
import thumbnailFive from "../assets/images/video-list-6.jpg"
import thumbnailSix from "../assets/images/video-list-7.jpg"
import thumbnailSeven from "../assets/images/video-list-8.jpg"

function NewVideoSection() {
    const sideVideo = [
        { 
            title: 'Become A Travel Pro In One Easy Lesson', 
            channel: 'Scotty Cranmer', 
            image: placeholder
        },
        { 
            title: 'Les Houches The Hidden Gem Of The Chamonix', 
            channel: 'Scotty Cranmer', 
            image: thumbnailOne
        },
        {
            title: 'Travel Health Useful Medical Information For',
            channel: 'Scotty Cranmer',
            image: thumbnailTwo
        },
        {
            title: 'Cheap Airline Tickets Great Ways To Save',
            channel: 'Emily Harper',
            image: thumbnailThree
        },
        {
            title: "Take A Romantic Break In A Boutique Hotel",
            channel: "Ethan Owen",
            image: thumbnailFour
        },
        {
            title: "Choose The Perfect Accommodations",
            channel: "Lydia Perez",
            image: thumbnailFive
        },
        {
            title: "Cruising Destination Ideas",
            channel: "Timothy Austin",
            image:thumbnailSix
        },
        {
            title: "Train Travel On Track For Safety",
            channel: "Scotty Cranemer",
            image:thumbnailSeven
        }

    ];
    let sideVideos = sideVideo.map( (video,index) => {
        return <VideoPreview key = {index} title = {video.title} image = {video.image} channel = {video.channel}> </VideoPreview>
    });
    return (
        <div className = "new-video">
            <h5 className = "new-video__title"> New Videos</h5>
            {sideVideos}
        </div>
    );
}

export default NewVideoSection