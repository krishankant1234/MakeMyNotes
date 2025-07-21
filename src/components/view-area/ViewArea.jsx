import DeleteBtn from "../delete-button/DeleteBtn";
import EditBtn from "../edit-button/EditBtn";
import ViewBtn from "../view-button/ViewBtn";
import "./ViewArea.css";

const ViewArea = ({ viewTexts, onDelete, onEdit, onView }) => {
  return (
    <div className="view-area">
      {viewTexts.map((entry, index) => (
        <div className="view-area-item" key={index}>
          <div className="view-area-container">
            <h3>{entry.heading}</h3>
            <p className="para">{entry.text}</p>
            <small className="date">
              {entry.date ? new Date(entry.date).toLocaleString() : ""}
            </small>
            <br />
            <hr className="hr" />
          </div>

          <div className="view-area-buttons">
            <ViewBtn onClick={() => onView(index)} />
            <EditBtn onClick={() => onEdit(index)} />
            <DeleteBtn onClick={() => onDelete(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewArea;
