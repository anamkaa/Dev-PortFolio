import "./App.css";
import hero from "./hero.svg";
import {
  GithubLogo,
  LinkedinLogo,
  TwitterLogo,
  FileHtml,
  FileCss,
  FileJs,
} from "@phosphor-icons/react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navigation container">
          <ul class="list-non-bullet nav-pills">
            <li class="list-item-inline">
              <a class="link link-active" href="/">
                Home
              </a>
            </li>
            <li class="list-item-inline">
              <a class="link" href="/projects.html">
                Projects
              </a>
            </li>
            <li class="list-item-inline">
              <a class="link" href="/blogs.html">
                Blogs
              </a>
            </li>
          </ul>
        </nav>

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

        <br />

        <footer class="footer">
          <div class="footer-header">Social Links</div>
          <ul class="social-links list-non-bullet">
            <li class="list-item-inline">
              <a
                class="link"
                href="https://www.linkedin.com/in/anamkaa/"
                target="/"
              >
                <LinkedinLogo size={32} weight="fill" />
              </a>
            </li>
            <li class="list-item-inline">
              <a class="link" href="https://github.com/anamkaa" target="/">
                <GithubLogo size={32} weight="fill" />
              </a>
            </li>
            <li class="list-item-inline">
              <a class="link" href="https://twitter.com/anamkaa_" target="/">
                <TwitterLogo size={32} weight="fill" />
              </a>
            </li>
          </ul>
        </footer>
      </header>
    </div>
  );
}

export default App;
