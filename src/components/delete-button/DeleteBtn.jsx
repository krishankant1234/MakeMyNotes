import "./DeleteBtn.css";

const DeleteBtn = ({ onClick }) => {
  return (
    <div className="delete-btn-container">
      <button className="deletebtn" onClick={onClick}>
        DELETE
      </button>
    </div>
  );
};

export default DeleteBtn;
