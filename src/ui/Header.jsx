import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";

import Container from "./Container";
import Logo from "./Logo";
import HamburgerIcon from "./HamburgerIcon";
import DarkModeToggle from "./DarkModeToggle";

import { useData } from "../context/DataContext";
import { useDarkMode } from "../context/DarkModeContext";

function Header() {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  const { dispatch } = useData();
  const { isDarkMode } = useDarkMode();

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
    hamburgerMenuIsOpen && setHamburgerMenuIsOpen(false);
    dispatch({ type: "setMailStatus", payload: { type: "mailto" } });
  }

  return (
    <header className="fixed left-0 top-0 z-30 w-full">
      <Container
        className={classNames(
          "flex h-navigation-height border-b border-transparent-sm  saturate-100 backdrop-blur-[30px]",
          isDarkMode ? "border-transparent-sm" : "!border-grey/10",
        )}
      >
        <div className="mr-6">
          <Logo />
        </div>

        <div
          className={classNames(
            "transition-[visibility] cbp-header:visible",
            hamburgerMenuIsOpen ? "visible" : "invisible delay-500",
          )}
        >
          <nav
            className={classNames(
              "fixed left-0 top-navigation-height h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto transition-opacity duration-500 cbp-header:relative cbp-header:top-0 cbp-header:block cbp-header:h-auto cbp-header:w-auto cbp-header:translate-x-0 cbp-header:overflow-hidden cbp-header:bg-transparent cbp-header:opacity-100 cbp-header:transition-none",

              hamburgerMenuIsOpen
                ? `translate-x-0 opacity-100 ${
                    isDarkMode
                      ? "bg-background"
                      : "bg-gradient-to-br from-sky-300 from-15% to-sky-200"
                  }`
                : "translate-x-[-100vw] opacity-0",
            )}
          >
            <ul
              className={classNames(
                "flex h-full flex-col text-highlight-text ease-in cbp-header:flex-row cbp-header:items-center [&_.active]:pointer-events-none [&_.active]:text-muted-text [&_a:hover]:text-muted-text [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-lg [&_a]:transition-[colors,transform] [&_a]:duration-500 cbp-header:[&_a]:translate-y-0 cbp-header:[&_a]:text-sm cbp-header:[&_a]:transition-colors [&_li]:ml-6 [&_li]:mr-6 [&_li]:border-b cbp-header:[&_li]:border-none",
                hamburgerMenuIsOpen && "[&_a]:translate-y-[0]",
                isDarkMode
                  ? " [&_li]:border-grey-dark"
                  : "[&_li]:border-transparent-md",
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
        <div className="ml-auto flex h-full items-center text-lg text-primary-text">
          <span className="mr-6 mt-[1px] flex items-center text-sm text-highlight-text [&_.active]:pointer-events-none [&_.active]:text-muted-text [&_a:hover]:text-muted-text [&_a]:transition-colors [&_a]:duration-200">
            <NavLink to="contact">Contact</NavLink>
          </span>
          <DarkModeToggle />
        </div>

        <button
          className="ml-6 cbp-header:hidden"
          onClick={() => setHamburgerMenuIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <HamburgerIcon isDarkMode={isDarkMode} />
        </button>
      </Container>
    </header>
  );
}

export default Header;
