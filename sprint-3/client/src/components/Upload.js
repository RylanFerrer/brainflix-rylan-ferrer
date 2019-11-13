import React from 'react'
import thumb from "../assets/images/upload.jpg"

export default function Upload() {
    return (
        <div className = "upload">
        <h2 className = "upload__header">Upload Video</h2>
            <div className = "upload__container">
                <div>
                    <h4 className = "upload__subtext">Video Thumbnail</h4>
                    <img  className = "upload__thumbnail"src = {thumb} alt = "Video Thumbnail"></img>
                </div>
            
                <div className = "upload__form">
                    <h4 className = "upload__subtext">Title Your Video</h4>
                    <input className = "upload__form-title"placeholder = "Add a title for your video"></input>
                    <h4 className = "upload__subtext">Add A Video Description</h4>
                    <input className = "upload__form-description"placeholder = "Add a description for your video"></input>
                </div>
            </div>

           
            <div className = "upload__form-container">
                    <button className="upload__form-button" type="submit" value="comment">PUBLISH</button>
                    <h4 className = "upload__form-cancel">CANCEL</h4>
                </div>
      
        </div>
    )
}
