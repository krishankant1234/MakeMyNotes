import CodeBtn from "../code-button/CodeBtn";
import "./CodeArea.css";

const CodeArea = ({
  handleCodeClick,
  text,
  setText,
  heading,
  setHeading,
  isEditing,
}) => {
  return (
    <div className="code-area">
      <input
        type="text"
        placeholder="Enter Heading..."
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
      />

      <textarea
        rows={10}
        cols={150}
        type="text"
        placeholder="Enter your code here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <CodeBtn onCode={handleCodeClick} isEditing={isEditing} />
    </div>
  );
};

export default CodeArea;
