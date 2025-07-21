import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ViewCode.css";
const ViewCode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Content passed from ViewArea
  // const content =
  //   location.state && location.state.content ? location.state.content : null;
  // const date =
  //   location.state && location.state.content ? location.state.date : null;
  // const heading = location.state || {};
  const { heading, content, date } = location.state || {};

  return (
    <div className="view-code">
      <h2>View Your Content</h2>

      <pre className="code_element">
        {heading && <h2 className="heading">{heading}</h2>}
        {date && (
          <div className="view-date">
            <strong>Date :</strong>
            {new Date(date).toLocaleDateString()}
          </div>
        )}
        <br />
        <br />
        {content !== null ? content : "Nothing to display."}

        <button className="view_code_btn" onClick={() => navigate(-1)}>
          Back
        </button>
      </pre>
    </div>
  );
};
export default ViewCode;
