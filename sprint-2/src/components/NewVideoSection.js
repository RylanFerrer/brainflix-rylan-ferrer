import React from 'react'

import VideoPreview from './VideoPreview';

function NewVideoSection({sideVideos,currentId}) {

    let sideVids = sideVideos.map((video,index) => {
        if(video.index !== currentId)
        {

            return <VideoPreview key = {index}  id = {video.id} title = {video.title} image = {video.image} channel = {video.channel}> </VideoPreview>
        }
        return null
    });
    return (
        <div className = "new-video">
            <h5 className = "new-video__title"> New Videos</h5>
            {sideVids}
        </div>
    );
}

export default NewVideoSection