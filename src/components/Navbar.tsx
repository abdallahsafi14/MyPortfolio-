import logo from "../assets/raviKumarLogo.png";
import { FaLinkedin,FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="" className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/abdallah-safi-a5663b306"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        className="text-zinc-50"
        >
          {" "}
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/abdallahsafi14"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-zinc-50"
          >
          {" "}
          <FaGithub/>
        </a>
        <a
          href="https://www.instagram.com/abdallahsafi3?igsh=MXJzMGc2d211eWk4cw=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-zinc-50"
          >
          {" "}
          <FaInstagram/>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100011182025231"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-zinc-50"
        >
          {" "}
          <FaFacebook />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
