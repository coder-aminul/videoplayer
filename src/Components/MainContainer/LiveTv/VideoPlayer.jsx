import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ tv }) {
  const { title, url } = tv;
  return (
    <div className="card">
      <div className="card-body">
        <h4>{title}</h4>
        <ReactPlayer url={url} />
      </div>
    </div>
  );
}
