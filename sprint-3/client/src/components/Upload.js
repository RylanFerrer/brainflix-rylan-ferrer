import React from 'react'
import thumb from "../assets/images/upload.jpg"
import axios from 'axios'

export default class Upload extends React.Component {
 
    upload = () => {
        axios.post("http://localhost:5000/videos", {
            title: this.title.value,
            description: this.desc.value
        })
    }
    cancel = () => {
        this.title.value = '';
          this.desc.value = '';
    }
    render() {
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
                        <input className = "upload__form-title"placeholder = "Add a title for your video" required ref = {ref => (this.title = ref)}></input>
                        <h4 className = "upload__subtext">Add A Video Description</h4>
                        <input className = "upload__form-description"placeholder = "Add a description for your video"  required ref = {ref => (this.desc = ref)}></input>
                    </div>
                </div>
                <div className = "upload__form-container">
                        <button className="upload__form-button" onClick = {this.upload} value="comment">PUBLISH</button>
                        <h4  onClick =  {this.cancel} className = "upload__form-cancel">CANCEL</h4>
                    </div>
          
            </div>
        )
    }
}
