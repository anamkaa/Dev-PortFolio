import "./App.css";
import Basicprojects from "./pages/basicprojects";
import Blogs from "./pages/blogs";
import Homepage from "./pages/home";
import Projects from "./pages/projects";

function App() {
  return (
    <div className="App">
      <Homepage/>
      <Projects/>
      <Basicprojects/>
      <Blogs/>
    </div>
  );
}

export default App;
