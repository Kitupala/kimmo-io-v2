import emailjs from "@emailjs/browser";
import classNames from "classnames";
import { useRef, useState } from "react";
import { useData } from "../../context/DataContext";
import { useDarkMode } from "../../context/DarkModeContext";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function ContactForm() {
  const form = useRef();
  const { dispatch } = useData();
  const { isDarkMode } = useDarkMode();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_fcc1yf5",
        "contact_form",
        form.current,
        "lacjK-mdK_15mVoWn",
      )
      .then(
        () => {
          dispatch({ type: "setMailStatus", payload: { type: "success" } });
          setIsLoading(false);
        },
        (error) => {
          dispatch({
            type: "setMailStatus",
            payload: { type: "error" },
            error,
          });
          setIsLoading(false);
        },
      );
  };

  const override = {
    position: "absolute",
    top: "35rem",
  };

  return (
    <>
      <ClipLoader
        color="#312e81"
        loading={isLoading}
        cssOverride={override}
        size={85}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      <div className="max-w-3xl animate-fade-translate-in rounded-md border border-transparent-sm bg-background/20 p-4 opacity-0 [--animation-delay:400ms] md:mt-16 md:p-8">
        <div
          className={isLoading && "opacity-30 transition-opacity duration-500"}
        >
          <span className="text-xxs uppercase tracking-widest text-muted-text">
            Send message
          </span>
          <p className="mt-3 text-sm text-primary-text sm:text-md">
            Don&apos;t be shy to drop me a message. I&apos;m always open to talk
            about new opportunities, projects or ways to collaborate on your
            visions.
          </p>

          <form
            className="mt-8 flex flex-col gap-6 text-md text-primary-text"
            autoComplete="off"
            ref={form}
            onSubmit={handleSubmit}
          >
            {/* USERNAME */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="userName"
                disabled={isLoading}
                required
                className={classNames(
                  "peer block w-full appearance-none rounded-lg border bg-transparent px-[1rem] pb-2.5 pt-4 capitalize focus:outline-none focus:ring-0",
                  isDarkMode &&
                    "border-transparent-md  focus:border-indigo-900",
                  !isDarkMode && "border-sky-200 focus:border-sky-300",
                )}
                placeholder=" "
              />
              <label
                htmlFor="name"
                className={classNames(
                  "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded-full px-2 text-sm text-muted-text duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:rounded-full peer-focus:px-2 peer-focus:text-muted-text",
                  isDarkMode && "bg-background/50 peer-focus:bg-background",
                  !isDarkMode && "bg-[#c9f4f4] peer-focus:bg-[#c9f4f4]",
                )}
              >
                Name
              </label>
            </div>

            {/* USEREMAIL */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="userEmail"
                disabled={isLoading}
                required
                className={classNames(
                  "peer block w-full appearance-none rounded-lg border !bg-transparent px-[1rem] pb-2.5 pt-4 focus:outline-none focus:ring-0",
                  isDarkMode &&
                    "border-transparent-md  focus:border-indigo-900",
                  !isDarkMode && "border-sky-200 focus:border-sky-300",
                )}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className={classNames(
                  "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded-full px-2 text-sm text-muted-text duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:rounded-full  peer-focus:px-2 peer-focus:text-muted-text",
                  isDarkMode && "bg-background/50 peer-focus:bg-background",
                  !isDarkMode && "bg-[#c9f4f4] peer-focus:bg-[#c9f4f4]",
                )}
              >
                Email
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                disabled={isLoading}
                required
                className={classNames(
                  "peer block w-full appearance-none rounded-lg border bg-transparent px-[1rem] pb-2.5 pt-4 focus:outline-none focus:ring-0",
                  isDarkMode &&
                    "border-transparent-md  focus:border-indigo-900",
                  !isDarkMode && "border-sky-200 focus:border-sky-300",
                )}
                placeholder=" "
              />
              <label
                htmlFor="message"
                className={classNames(
                  "absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform rounded-full px-2 text-sm text-muted-text duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:rounded-full  peer-focus:px-2 peer-focus:text-muted-text",
                  isDarkMode && "bg-background/50 peer-focus:bg-background",
                  !isDarkMode && "bg-[#cef5f5] peer-focus:bg-[#cef5f5]",
                )}
              >
                Your message
              </label>
            </div>

            <div className="mt-4 flex justify-center gap-4">
              <button
                className={classNames(
                  "max-w-max cursor-pointer self-center rounded-md border px-6 py-3 text-sm text-muted-text transition-all duration-200 ",
                  isLoading && "invisible",
                  isDarkMode &&
                    "border-transparent-md hover:border-indigo-900 hover:bg-page-gradient hover:text-indigo-300",
                  !isDarkMode &&
                    "border-sky-200 hover:border-sky-300 hover:text-highlight-text",
                )}
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <input
                className={classNames(
                  "max-w-max cursor-pointer self-center rounded-md border border-transparent-md px-6 py-3 text-sm transition-all duration-200",
                  isLoading && "invisible",
                  isDarkMode &&
                    "hover:border-indigo-900 hover:bg-page-gradient hover:text-indigo-300",
                  !isDarkMode &&
                    "border-sky-200 hover:border-sky-300 hover:text-highlight-text",
                )}
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
