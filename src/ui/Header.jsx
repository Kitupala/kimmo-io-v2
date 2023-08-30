import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";

import Container from "./Container";
import Logo from "./Logo";
import LogoIcon from "./LogoIcon";
import HamburgerIcon from "./HamburgerIcon";
import { LuLightbulb } from "react-icons/lu";

function Header() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
  }, [hamburgerMenuIsOpen]);

  useEffect(() => {
    const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);

    window.addEventListener("orientationchange", closeHamburgerNavigation);
    window.addEventListener("resize", closeHamburgerNavigation);

    return () => {
      window.removeEventListener("orientationchange", closeHamburgerNavigation);
      window.removeEventListener("resize", closeHamburgerNavigation);
    };
  }, [setHamburgerMenuIsOpen]);

  function handleClick() {
    setHamburgerMenuIsOpen((open) => !open);
  }

  return (
    <header className="fixed left-0 top-0 z-30 w-full saturate-100 backdrop-blur-[30px]">
      <Container className="flex h-navigation-height border-b border-transparent-white-primary">
        <div className="flex items-center text-md">
          <LogoIcon className="mr-1 h-5 w-5 fill-off-white" />
          <Logo className="mr-8 h-4 fill-off-white" />
        </div>

        <div
          className={classNames(
            "cbp-header:visible transition-[visibility]",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500",
          )}
        >
          <nav
            className={classNames(
              "cbp-header:relative cbp-header:top-0 cbp-header:block cbp-header:h-auto cbp-header:w-auto cbp-header:translate-x-0 cbp-header:overflow-hidden cbp-header:bg-transparent cbp-header:opacity-100 cbp-header:transition-none fixed left-0 top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500",
              hamburgerMenuIsOpen
                ? "translate-x-0 opacity-100"
                : "translate-x-[-100vw] opacity-0",
            )}
          >
            <ul
              className={classNames(
                "cbp-header:flex-row cbp-header:items-center cbp-header:[&_a]:translate-y-0 cbp-header:[&_a]:text-sm cbp-header:[&_a]:transition-colors cbp-header:[&_li]:border-none flex h-full flex-col ease-in [&_.active]:pointer-events-none [&_.active]:text-grey [&_a:hover]:text-grey [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[colors,transform] [&_a]:duration-500 [&_li]:ml-6 [&_li]:mr-6 [&_li]:border-b [&_li]:border-grey-dark",
                hamburgerMenuIsOpen && "[&_a]:translate-y-[0]",
              )}
            >
              <li>
                <NavLink to="/" onClick={() => handleClick()}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="projects" onClick={() => handleClick()}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="studies" onClick={() => handleClick()}>
                  Studies
                </NavLink>
              </li>
              <li>
                <NavLink to="abilities" onClick={() => handleClick()}>
                  Abilities
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="ml-auto flex h-full items-center text-lg text-grey [&_button:hover]:text-off-white [&_button]:duration-300 ">
          <span className="mr-6 mt-[1px] flex items-center text-sm text-off-white [&_.active]:pointer-events-none [&_.active]:text-grey [&_a:hover]:text-grey [&_a]:transition-colors [&_a]:duration-200">
            <NavLink to="contact" onClick={() => handleClick()}>
              Contact
            </NavLink>
          </span>
          <button
            className="cursor-not-allowed"
            aria-label="Light/Dark mode toggle"
          >
            <LuLightbulb />
          </button>
        </div>

        <button
          className="cbp-header:hidden ml-6"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon />
        </button>
      </Container>
    </header>
  );
}

export default Header;
