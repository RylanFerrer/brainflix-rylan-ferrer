import React from 'react'
function Comment(props) {
    
    return (
        <div className="comment-box" >
            <img  alt = "avatar" src={props.avatar} className="comment-box__avatar"/>
                <div className="comment-box__main-content"><div className="comment-box__header">
                <h5 className="comment-box__name">{props.name}</h5><h5 className="comment-box__date">{props.date}</h5>
        </div>
        <h5 className="comment-box__comment">{props.comment}</h5>
        </div>
        </div>
    );
}

export default Comment