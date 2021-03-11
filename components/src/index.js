import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 PM"
        textBlog="Nice post"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 1:30 PM"
        textBlog="This is Awesome"
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 2:20 AM"
        textBlog="Thumb Up"
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
