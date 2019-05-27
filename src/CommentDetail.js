import React from 'react';
import faker from 'faker';


const CommentDetail = (props) =>{
    return (
    <div className="ui container comments">
         <div className="comment">
            <a href="/" className="avater">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                    </a>
                <div className="metadata">
                 <span className="date" >{props.time}</span>
                </div>
              <div className="text">{props.content}</div>
            </div>
       
          </div>
    </div>
    )
}
export default CommentDetail;