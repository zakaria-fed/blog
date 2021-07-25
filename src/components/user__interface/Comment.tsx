import React from "react"
import "./Comment.css"

interface commInter {
  ayoub: string;
}

const Comment:React.FC<commInter> = ({ayoub}) => {
  return (
    <div className="dialogbox">
      <div className="body">
        <span className="tip tip-left"></span>
        <div className="message">
          <span>
            {ayoub}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;