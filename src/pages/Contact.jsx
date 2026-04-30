import "../styles/Contact.css";
import "../styles/index.css";

function Contact() {

  const emailAddress = "mailto:myro.joy.olida.092282@gmail.com";

  return (
    <div className="contact-detail">
      <div className="contact-email">
        <h2> If you'd like to ...</h2>
        <ul>
          <li>...talk about a project idea</li>
          <li>...discuss an existing project</li>
          <li>...just say hi</li>
        </ul>
        <h4>
          Feel free to reach me via
          <a className="emailBtn" href={emailAddress}>
            e-mail !
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
