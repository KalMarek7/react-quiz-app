import {
  SiMaildotru,
  SiLinkedin,
  SiGithub,
  SiCodesandbox,
  SiCodewars,
} from "react-icons/si";

const Contact = () => {
  return (
    <main className="contactContainer">
      <ul className="contactContent">
        <li>
          {" "}
          <SiMaildotru className="icon" />
          Email
        </li>
        <li>
          {" "}
          <SiLinkedin className="icon" />
          LinkedIn
        </li>
        <li>
          {" "}
          <SiGithub className="icon" />
          GitHub
        </li>
        <li>
          <SiCodesandbox className="icon" />
          Codesandbox
        </li>
        <li>
          {" "}
          <SiCodewars className="icon" />
          Codewars
        </li>
      </ul>
    </main>
  );
};

export default Contact;
