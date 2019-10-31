import React from 'react'
import VideoInfo from "./VideoInfo";
import Video from './Video';
import CommentsSection from "./CommentsSection";
import NewVideoSection from "./NewVideoSection";
import media from "../assets/Video/brainstation.mp4";
import Avatar from "../assets/images/Mohan-muruge.jpg"
import poster from "../assets/images/video-list-0.jpg";
import placeholder from "../assets/images/video-list-1.jpg"
import thumbnailOne from "../assets/images/video-list-2.jpg"
import thumbnailTwo from "../assets/images/video-list-3.jpg"
import thumbnailThree from "../assets/images/video-list-4.jpg"
import thumbnailFour from "../assets/images/video-list-5.jpg"
import thumbnailFive from "../assets/images/video-list-6.jpg"
import thumbnailSix from "../assets/images/video-list-7.jpg"
import thumbnailSeven from "../assets/images/video-list-8.jpg"


export default class MainSection extends React.Component {
    state = {
        id: '0',
        title: ' BMX Rampage: 1939 Highlights',
        description: ' On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'Red Cow',
        image: poster,
        views: '100,000',
        likes: '100,000',
        duration: '4:40',
        video: media,
        timestamp: '-957268170',
        comments: [
            {
                avatar: Avatar,
                name: "Micheal Lyons",
                date: "12/18/2018",
                comment:
                  "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
              },
              {
                avatar: Avatar,
                name: "Gary Wong",
                date: "12/12/2018",
                comment:
                  "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
              },
              {
                avatar: Avatar,
                name: "Theodore Duncan",
                date: "11/15/2018",
                comment:
                  "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
              }
             ],
        sideVideos: [ { 
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
            ]
    }

    
    render() {
    return (
        <>
        <Video poster = {this.state.image} media = {this.state.video} duration = {this.state.duration}> </Video>
        <div className = "grid-container">
            <div className = "grid-container__left">
            <VideoInfo title = {this.state.title} views = {this.state.views} likes = {this.state.likes} description = {this.state.description} timestamp = {this.state.timestamp}
            channel = {this.state.channel}   ></VideoInfo>
            <CommentsSection commentInfo = {this.state.comments} avatar = {Avatar}></CommentsSection>
            </div>
            <NewVideoSection sideVideos = {this.state.sideVideos}></NewVideoSection>
        </div>
        </>
    )
    }
}
