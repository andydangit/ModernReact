import React from "react";

const CommCommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date"> Today at 6:00 pm </span>
        </div>
        <div className="text">nice blog post!</div>
      </div>
    </div>
  );
};
