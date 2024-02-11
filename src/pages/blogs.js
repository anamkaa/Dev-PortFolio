import "../../src/App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />

      <div class="container container-center ">
        <section class="section blue">
          <h1>CSS BOX Model</h1>

          <p>
            <strong>Aug 26, 2021 ・2 min read</strong>
            All the components depicted in a web page consists of boxes. So,
            basically all the html elements can be considered as boxes. In CSS,
            box model is used for the design and layout of the html elements
            ,also how each of them are arranged together to form an overall
            layout. What is CSS Box Model? The CSS Box Model is a box that wraps
            around every html element. It has four layers: margin, border,
            padding, content...
          </p>
          <a
            class="link link-primary"
            href="https://dev.to/anamkaa_/css-box-model-5075"
            target="/"
          >
            Read more
          </a>
        </section>
      </div>

      <div class="container container-center ">
        <section class="section blue">
          <h1>DOM Explained</h1>
          <p>
            <strong>Aug 27, 2021 ・2 min read</strong>
            DOM stands for Document Object Model. It is an programming interface
            for web documents. It shows how document content is accessed and
            modified. It defines the logical structure of documents. It
            represents the document as nodes and objects, such that any
            programming language can interact with the page...
          </p>
          <a
            class="link link-primary"
            href="https://dev.to/anamkaa_/dom-explained-12dd"
            target="/"
          >
            Read more
          </a>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
