import React from 'react'
import VideoPreview from './VideoPreview';
function NewVideoSection() {
    return (
        <div className = "new-video">
            <h5 className = "new-video__title"> New Videos</h5>
            <VideoPreview> </VideoPreview>
            <VideoPreview> </VideoPreview>
            <VideoPreview> </VideoPreview>
            <VideoPreview> </VideoPreview>
            <VideoPreview> </VideoPreview>
            <VideoPreview> </VideoPreview>
            <VideoPreview> </VideoPreview>
            <VideoPreview> </VideoPreview>
        </div>
    );
}

export default NewVideoSection