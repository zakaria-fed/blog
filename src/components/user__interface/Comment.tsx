import React from "react"
import "./Comment.css"

interface commInter {
  comment: string;
}

const Comment:React.FC<commInter> = ({comment}) => {
  return (
    <div className="dialogbox">
      <div className="body">
        <span className="tip tip-left"></span>
        <div className="message">
          <span>
            {comment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;