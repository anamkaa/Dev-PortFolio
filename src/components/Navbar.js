import "../../src/App.css";

const Navbar = () => {
    return (
        <>
           <nav class="navigation container">
          <ul class="list-non-bullet nav-pills">
            <li class="list-item-inline">
              <a class="link link-active" href="/">
                Home
              </a>
            </li>
            <li class="list-item-inline">
              <a class="link" href="./projects">
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
        </>
    )
}

export default Navbar;