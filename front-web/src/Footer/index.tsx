import "./styles.css";
import { ReactComponent as YoutubeIcon } from "./Youtube.svg";
import { ReactComponent as Linkedin } from "./Linkedin.svg";
import { ReactComponent as InstagramIcon } from "./Instagram.svg";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/" target="_new">
          <YoutubeIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/bruno-henrique-santos-ara%C3%BAjo-735366165/"
          target="_new"
        >
          <Linkedin />
        </a>

        <a href="https://www.instagram.com/bh_desenvolvimento/">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
