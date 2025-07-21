import "./CodeBlock.css";
import CodeArea from "./components/code-area/CodeArea";
import ViewArea from "./components/view-area/ViewArea";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CodeBlock = () => {
  const navigate = useNavigate();

  const [viewTexts, setViewTexts] = useState(() => {
    const saved = localStorage.getItem("viewTexts");
    return saved ? JSON.parse(saved) : [];
  });
  const [heading, setHeading] = useState(""); //new state

  const [text, setText] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem("viewTexts", JSON.stringify(viewTexts));
  }, [viewTexts]);

  function handleCodeClick() {
    if (heading.trim() !== "" && text.trim() !== "") {
      const currentDate = new Date();
      setViewTexts([
        ...viewTexts,
        { heading, text, date: currentDate.toISOString() },
      ]);
      setHeading("");
      setText("");
      setIsEditing(false);
    }
  }

  function handleDelete(index) {
    if (window.confirm("Are you Sure ")) {
      setViewTexts(viewTexts.filter((_, i) => i !== index));
    }
  }

  function handleEdit(index) {
    setText(viewTexts[index].text);
    setViewTexts(viewTexts.filter((_, i) => i !== index));
    setIsEditing(true);
  }

  function handleView(index) {
    navigate("/view", {
      state: {
        heading: viewTexts[index].heading,
        content: viewTexts[index].text,
        date: viewTexts[index].date,
      },
    });
  }

  return (
    <div className="code-block">
      <h1 className="main_heading">Code Block</h1>

      <CodeArea
        heading={heading}
        setHeading={setHeading}
        text={text}
        setText={setText}
        handleCodeClick={handleCodeClick}
      />
      <hr />
      <ViewArea
        viewTexts={viewTexts}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onView={handleView}
      />
    </div>
  );
};

export default CodeBlock;
