import React from 'react';
import Comment from './Comment';
import Avatar from "../assets/images/Mohan-muruge.jpg"

function CommentsSection({commentInfo, avatar}) {
    const list = commentInfo && commentInfo.map((comment, index) => {
        console.log(comment)
        return <Comment key = {index} avatar = {Avatar} name = {comment.name} date = {comment.timestamp} comment = {comment.comment}></Comment>
    })
    return (
        <div className = "comments">
            <h3 className = "comments__header">3 Comments</h3>
            <div className = "comments__form-box">
            <img className = "comment-box__avatar comment-box__avatar--form" src={Avatar} alt="avatar"/>
            <div className = "comments__form-section">
               <form id="form-section" method="POST">
               <div className = "comments__text-container">
               <h5 className="comments__form-header">Join the conversation</h5>
               <input className = "comments__form-textbox"
                  type="text"
                  name="comment"
                  placeholder=" Add a new comment"
                  />
               </div>
                  <button className="comments__form-button" type="submit" value="comment">COMMENT</button>
               </form>
            </div>
          
        </div>
        <div className = "comments-section">
                {list}
        </div>
      
    </div>
        
     
    );
}
export default CommentsSection