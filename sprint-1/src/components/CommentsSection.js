import React from 'react';
import Comment from './Comment';


function CommentsSection(props) {
    
    console.log(props)
    const test = props.commentInfo.map((comment, index) => {
        return <Comment key = {index} avatar = {comment.avatar} name = {comment.name} date = {comment.date} comment = {comment.comment}></Comment>
    })
    return (
        <div className = "comments">
            <h3 className = "comments__header">3 Comments</h3>
            <div className = "comments__form-box">
            <img className = "comment-box__avatar comment-box__avatar--form" src={props.avatar} alt="avatar"/>
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
                {test}
        </div>
      
    </div>
        
     
    );
}
export default CommentsSection