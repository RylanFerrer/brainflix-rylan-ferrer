import React from 'react'
import VideoInfo from "./VideoInfo";
import Video from './Video';
import CommentsSection from "./CommentsSection";
import NewVideoSection from "./NewVideoSection";
import media from "../assets/Video/brainstation.mp4";
import Avatar from "../assets/images/Mohan-muruge.jpg"
import poster from "../assets/images/video-list-0.jpg";

export default function MainSection() {
    const mainVideo = {
        id: '0',
        title: ' BMX Rampage: 1939 Highlights',
        description: ' On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'Red Cow',
        image: poster,
        views: '1000',
        likes: '1000',
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
             ]
    };
    return (
        <>
        <Video poster = {mainVideo.image} media = {mainVideo.video}> </Video>
        <div className = "grid-container">
            <div className = "grid-container__left">
            <VideoInfo title = {mainVideo.title} views = {mainVideo.views} likes = {mainVideo.likes} description = {mainVideo.description} timestamp = {mainVideo.timestamp}
            channel = {mainVideo.channel}   ></VideoInfo>
            <CommentsSection commentInfo = {mainVideo.comments} avatar = {Avatar}></CommentsSection>
            </div>
            <NewVideoSection></NewVideoSection>
        </div>
        </>
    )
}
