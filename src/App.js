import "./App.css";
import hero from "./images/hero.svg";
import Projects from "./pages/projects";
import Basicprojects from "./pages/basicprojects";
import Blogs from "./pages/blogs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">

        <Navbar/>

        <header class="hero">
          <img class="hero-img image-round" src={hero} alt="image" />
          <p className="text-center">Hello👋 , I am Anamika</p>
          <h1 class="hero-heading">Front-End React Developer</h1>
          <div class="container container-center text-center">
            <div class="list list-hr">
              <span>Tech Stack:</span>
              <span className="link link-primary mrg">html</span>
              <span className="link link-primary mrg">css</span>
              <span className="link link-primary mrg">javascript</span>
              <span className="link link-primary mrg">reactjs</span>
              <span className="link link-primary mrg">nodejs</span>
              <span className="link link-primary mrg">git</span>
            </div>
          </div>
        </header>

        <Footer/>
      <Projects/>
      <Basicprojects/>
      <Blogs/>
    </div>
  );
}

export default App;
