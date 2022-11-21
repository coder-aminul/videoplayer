import React, { useState } from "react";
import { liveTv } from "../../../Data/TVData";
import VideoPlayer from "./VideoPlayer";

export default function LiveTvList() {
  const [selectTv, setSelectTv] = useState(null);

  const onSelectTv = (item) => {
    setSelectTv(item);
  };
  let tvdetails = null;
  if (selectTv !== null) {
    tvdetails = <VideoPlayer tv={selectTv} />;
  }
  return (
    <div className="row mt-5">
      <div className="col-md-8 mb-3">{tvdetails}</div>
      <div className="col-md-12">
        <ul className="d-flex gap-3">
          {liveTv.map((item) => (
            <li
              key={Math.random()}
              className="list-unstyled"
              style={{ cursor: "pointer" }}
              onClick={() => onSelectTv(item)}
            >
              <img src={item.thumbnail} alt={item.title} width="150" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
