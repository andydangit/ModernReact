import React from "react";

const VideoItem = ({ video }) => {
  return (
    <dvi>
      <img src={video.snippet.thumbnails.medium.url}/>
      {video.snippet.title}
    </dvi>
  );
};

export default VideoItem;
