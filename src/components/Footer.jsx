import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faCodepen } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const raw = import.meta.env.VITE_LAST_UPDATED; // "2026-03-03"

  const updated = raw
    ? `${raw.slice(5, 7)}/${raw.slice(8, 10)}/${raw.slice(0, 4)}`
    : "Unknown";

  return (
    <footer>
      <div>
        <a href="https://www.linkedin.com/in/myro-joy-lee/">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/myrojoylee">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://codepen.io/p2nd2b32r">
          <FontAwesomeIcon icon={faCodepen} />
        </a>
      </div>
      <div>
        <p>
          Updated {updated} by{" "}
          <a href="https://www.linkedin.com/in/myro-joy-lee/">Myro Joy Lee</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;