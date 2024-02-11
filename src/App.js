import { Routes, Route } from "react-router-dom";
import "./App.css";
import Basicprojects from "./pages/basicprojects";
import Blogs from "./pages/blogs";
import Homepage from "./pages/home";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/basicprojects" element={<Basicprojects />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
