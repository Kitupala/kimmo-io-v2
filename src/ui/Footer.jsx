import Container from "./Container";
import Logo from "./Logo";
import {
  BsEnvelopeAtFill,
  BsFacebook,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="mt-32 text-sm">
      <Container className="flex flex-col justify-between border-t border-transparent-white py-14 sm:flex-row">
        <div>
          <div className="flex h-full flex-row justify-between sm:flex-col">
            <div className="flex items-center self-start">
              <Logo className="mr-4 h-4 fill-off-white" />
            </div>
            <div className="flex items-center space-x-4 text-lg text-grey [&_a:hover]:text-off-white [&_a]:duration-300 hover:[&_a]:-translate-y-0.5 sm:[&_a]:-translate-y-2 sm:hover:[&_a]:-translate-y-3.5">
              <a
                href="https://linkedin.com/in/kimmotuupanen"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin />
              </a>
              <a href="#" rel="noreferrer">
                <BsFacebook />
              </a>
              <a
                href="https://github.com/Kitupala"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub />
              </a>
              <a href="mailto:kimmo.tuupanen@gmail.com">
                <BsEnvelopeAtFill />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex max-w-md text-xxs text-grey sm:mt-0 sm:text-xs">
          <p>
            Handcrafted in{" "}
            <span>
              <a
                href="https://code.visualstudio.com/"
                className="font-medium text-slate-400 hover:text-slate-300"
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
                className="font-medium text-slate-400 hover:text-slate-300"
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
                className="font-medium text-slate-400 hover:text-slate-300"
                target="_blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>
            </span>
            , deployed with{" "}
            <span>
              <a
                href="https://vercel.com/"
                className="font-medium text-slate-400 hover:text-slate-300"
                target="_blank"
                rel="noreferrer"
              >
                Vercel
              </a>
            </span>
            . All text except logo is set in the{" "}
            <span>
              <a
                href="https://https://fonts.google.com/specimen/Titillium+Web.com/"
                className="font-medium text-slate-400 hover:text-slate-300"
                target="_blank"
                rel="noreferrer"
              >
                Titillium Web
              </a>
            </span>{" "}
            typeface.
            <br />
            <span className="flex items-center pt-2 text-xxs">
              2023&thinsp;
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
