import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
        <div className="flex gap-10 p-4 justify-center text-white ">
          <a
            href="https://www.facebook.com/Guy.worrapob/"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/worrapob.g"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/guykub"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white "
            target="_blank"
          >
            <FaSquareGithub />
          </a>
        </div>
        <p>@ 2025 Ishaq. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;