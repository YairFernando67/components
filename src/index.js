import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Yair"
        timeAgo="Today at 6:00pm"
        post="Nice job!!"
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Yesterday at 2:10am"
        post="I liked it so much.."
        image={faker.image.avatar()}
      />
      <CommentDetail
        author="Laura"
        timeAgo="Nov-12-2019 at 10:54pm"
        post="Where are my frinds???"
        image={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
