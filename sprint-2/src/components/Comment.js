import React from 'react'
function Comment({avatar,name,date,comment}) {
    let Newtimestamp = new Date(date)
    let postDate = `${Newtimestamp.getMonth() + 1}/${Newtimestamp.getDate()}/${Newtimestamp.getFullYear()}`
    return (
        <div className="comment-box" >
            <img  alt = "avatar" src={avatar} className="comment-box__avatar"/>
                <div className="comment-box__main-content"><div className="comment-box__header">
                <h5 className="comment-box__name">{name}</h5><h5 className="comment-box__date">{postDate}</h5>
        </div>
        <h5 className="comment-box__comment">{comment}</h5>
        </div>
        </div>
    );
}

export default Comment