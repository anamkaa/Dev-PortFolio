import "../../src/App.css";
import hero from "../images/hero.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />

      <header class="hero">
        <img class="hero-img image-round" src={hero} alt="image" />
        <p className="text-center">Hello👋 , I am Anamika</p>
        <h1 class="hero-heading">Front-End React Developer</h1>
        <div class="container container-center text-center">
          <div class="list-align">
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

      <Footer />
    </>
  );
};

export default Homepage;
