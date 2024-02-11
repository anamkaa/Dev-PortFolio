import "../../src/App.css";
import ecom from "../images/ecom.png";
import fabui from "../images/fabui.png";
import fitflix from "../images/fitflix.png";
import noteapp from "../images/noteapp.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = ()  => {
    return(

        <>
   

    <Navbar/>


    <div class="container container-center">
        <section class="section blue">
            <h1>The Green Alley - Ecommerce Website</h1>
            <img src={ecom} alt="image" class="img-pr" />
            <p>The Green Alley, Fully functional E-Commerce website. Made with <strong>ReactJS, ContextAPI, useReducer Hook</strong> and mock backend.</p>
            <a class="link link-primary" href="https://thegreenalley.vercel.app/" target="/">Live Project</a>
            <a class="link link-primary" href="https://github.com/anamkaa/the-green-alley" target="/">See Code</a>
        </section>
    </div>


    <div class="container container-center ">
        <section class="section blue">
            <h1>Fit Flix - Video Library</h1>
            <img src={fitflix} alt="image" class="img-pr" />
            <p>A Curated Video Library focused on Yoga and Fitness. Made with <strong>ReactJS, ContextAPI, useReducer Hook</strong> and mock backend.</p>
            <a class="link link-primary" href="https://fitflixx.vercel.app/" target="/">Live Project</a>
            <a class="link link-primary" href="https://github.com/anamkaa/fit-flix" target="/">See Code</a>
        </section>
    </div>

    <div class="container container-center ">
        <section class="section blue">
            <h1>Note App</h1>
            <img src={noteapp} alt="image" class="img-pr" />
            <p>A Google Keep like Note taking application built with React js Features included: Auth, Add, Remove, Archive, Edit notes, Change
                color, and add a tag.  Made with <strong>ReactJS, ContextAPI, useReducer Hook</strong> and mock backend.</p>
            <a class="link link-primary" href="http://note-app-blue.vercel.app/" target="/">Live Project</a>
            <a class="link link-primary" href="https://github.com/anamkaa/note-app" target="/">See Code</a>
        </section>
    </div>

    <div class="container container-center ">
        <section class="section blue">
            <h1>Fab-UI - Component Library</h1>
            <img src={fabui} alt="image" class="img-pr" />
            <p>A CSS Component Library to create and customize your projects. Built with <strong>HTML , CSS</strong> and <strong>JS</strong></p>
            <a class="link link-primary" href="https://fab-ui-lib.netlify.app/" target="/">Live Project</a>
            <a class="link link-primary" href="https://github.com/anamkaa/Fab-UI" target="/">See Code</a>
        </section>
    </div>

    <div class="container container-center ">
        <section class="section blue">
            
            <p>Basic projects made with vanilla js. </p>

                <a class="link link-primary" href="/basicprojects.html" target="/"> Browse</a>
        </section>
       
    </div>
<Footer/>

   

    {/* <footer class="footer">
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
        </footer> */}
        </>
            
       

    );
}

export default Projects;