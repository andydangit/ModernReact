import './VideoItem.css';
import React from "react";

const VideoItem = ({ video }) => {
  return (
    <dvi className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="smallImage"
      />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </dvi>
  );
};

export default VideoItem;
