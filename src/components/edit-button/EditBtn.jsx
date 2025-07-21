import "./EditBtn.css";

// const EditBtn = () => {
//   function testing() {
//     alert("Edit button clicked! This will redirect to the edit page.");
//     // Here you can add logic to redirect to the edit page or open an edit modal
//     // For example, using React Router:
//     // navigate('/EditCode');
//   }
//   return (
//     <div className="edit-btn-container">
//       <button className="editbtn">EDIT </button>
//     </div>
//   );
// };

// export default EditBtn;
import React from "react";

const EditBtn = ({ onClick }) => {
  return (
    <button className="editbtn" onClick={onClick}>
      Edit
    </button>
  );
};

export default EditBtn;
