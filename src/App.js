import "./App.css";
import CodeBlock from "./CodeBlock";
import ViewCode from "./components/view-code/ViewCode";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<CodeBlock />} />
          <Route path="/view" element={<ViewCode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
