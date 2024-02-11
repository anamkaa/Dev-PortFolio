import "../../src/App.css";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
