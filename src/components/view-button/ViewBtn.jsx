import React from "react";
import "./ViewBtn.css";

const ViewBtn = ({ onClick }) => {
  return (
    <div className="view-btn-container">
      <button className="viewbtn" onClick={onClick}>
        VIEW
      </button>
    </div>
  );
};

export default ViewBtn;
