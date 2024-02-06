import classNames from "classnames";
import Container from "./Container";

import Logo from "./Logo";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

function Footer() {
  const { isDarkMode } = useDarkMode();
  return (
    <footer className="mt-32 text-sm">
      <Container
        className={classNames(
          "flex flex-col justify-between border-t py-14 sm:flex-row",
          isDarkMode ? "border-transparent-sm" : "border-grey/10",
        )}
      >
        <div>
          <div className="flex h-full flex-row justify-between sm:flex-col">
            <div className="-ml-2 -mt-2 flex items-center">
              <Logo className="mr-4 h-4" />
            </div>
            <div className="flex items-center space-x-4 text-lg text-[#0072b1] [&_a:hover]:text-[#0073b1d3] [&_a]:duration-300 hover:[&_a]:-translate-y-0.5">
              <a
                href="https://linkedin.com/in/kimmotuupanen"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to Linkedin"
              >
                <BsLinkedin />
              </a>
              {/* <a href="#" rel="noreferrer">
                <BsFacebook />
              </a> */}
              <a
                href="https://github.com/Kitupala"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to GitHub"
              >
                <BsGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex max-w-md text-xxs text-muted-text sm:mt-0 sm:text-xs">
          <p>
            Handcrafted in{" "}
            <span>
              <a
                href="https://code.visualstudio.com/"
                className="font-medium text-footer-link hover:text-footer-link-hover"
                target="_blank"
                rel="noreferrer"
              >
                Visual Studio Code
              </a>
            </span>
            . Built with{" "}
            <span>
              <a
                href="https://react.dev/"
                className="font-medium text-footer-link hover:text-footer-link-hover"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
            </span>{" "}
            and{" "}
            <span>
              <a
                href="https://tailwindcss.com/"
                className="font-medium text-footer-link hover:text-footer-link-hover"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>
            </span>
            , deployed with{" "}
            <span>
              <a
                href="https://app.netlify.com/"
                className="font-medium text-footer-link hover:text-footer-link-hover"
                target="_blank"
                rel="noreferrer"
              >
                Netlify
              </a>
            </span>
            . All text except logo is set in the{" "}
            <span>
              <a
                href="https://https://fonts.google.com/specimen/Titillium+Web.com/"
                className="font-medium text-footer-link hover:text-footer-link-hover"
                target="_blank"
                rel="noreferrer"
              >
                Titillium Web
              </a>
            </span>{" "}
            typeface.
            <br />
            <span className="mb-[-4px] flex items-center pt-2 text-xxs">
              2024&thinsp;
              <span className="text-xs font-extralight">Ⓒ</span>
              &thinsp;Kitupala | All Rights Reserved
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
