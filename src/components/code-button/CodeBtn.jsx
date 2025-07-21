import "./CodeBtn.css";

const CodeBtn = ({ onCode, isEditing }) => {
  return (
    <div>
      <button className="codebtn" onClick={onCode}>
        {isEditing ? "Update Code" : "SAVE"}
      </button>
    </div>
  );
};

export default CodeBtn;
