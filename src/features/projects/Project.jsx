import { SiGithub, SiNetlify, SiVercel } from "react-icons/si";

function Project() {
  return (
    <div
      className="grid w-full animate-fade-in grid-cols-11 py-[3px] text-primary-text opacity-0 [--animation-delay:1400ms]
      md:pl-[4rem]"
      id="omnifood"
    >
      {/* Project description */}
      <div className="border-transparent-white-primary col-span-12 col-end-12 row-span-full flex h-full flex-col self-center border bg-background/[85%] p-6 md:col-span-6 md:col-start-1 md:border-0 md:bg-transparent md:p-0">
        <h3
          className="text-xl text-off-white sm:text-2xl 
          "
        >
          <span className="text-xxs uppercase text-grey">Featured project</span>
          <br />
          Omnifood
        </h3>
        <div className=" md:border-transparent-white-primary mt-5 max-w-lg rounded-md md:max-w-none md:border md:bg-background/80 md:px-5 md:py-4 md:shadow-2xl">
          <p className="text-md">
            Responsive landing page for a fictional food delivery company. Built
            with modern HTML and CSS.
          </p>
        </div>

        {/* Project links */}
        <div className="z-20 row-span-full flex space-x-4 pt-6 text-2xl text-grey md:col-span-6 md:col-start-1 [&_a:hover]:text-off-white [&_a]:duration-300">
          {/* <span>
          <a
          href="https://github.com/"
          aria-label="GitHub Link"
          rel="noopener noreferrer"
          target="_blank"
          >
          <SiNetlify />
          </a>
        </span> */}
          <span>
            <a
              href="https://github.com/"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiGithub />
            </a>
          </span>
          <span>
            <a
              href="https://github.com/"
              aria-label="GitHub Link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <SiVercel />
            </a>
          </span>
        </div>
      </div>

      {/* Project image */}
      <div className="-z-20 col-span-12 col-end-12 row-span-full md:col-span-7 md:col-end-12">
        <img
          className="min-h-full rounded-md object-cover opacity-70 md:object-contain"
          src="../src/data/imgs/omnifood.jpg"
        />
      </div>

      {/* Project technologies */}
      <div className="col-span-12 col-end-12 row-span-full flex flex-col items-end justify-end p-6 md:z-0 md:p-0">
        <ul
          className="mt-1 flex flex-wrap [&_li]:mr-1.5 last:[&_li]:mr-0"
          aria-label="Technologies used"
        >
          <li className="flex items-center rounded-full bg-page-gradient px-4 py-[6px] text-xs font-medium leading-5 text-grey">
            HTML
          </li>
          <li className="flex items-center rounded-full bg-page-gradient px-4 py-[6px] text-xs font-medium leading-5 text-grey">
            CSS
          </li>
          {/* <li className="flex items-center rounded-full bg-page-gradient px-4 py-[6px] text-xs font-medium leading-5 text-grey">
            JavaScript
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Project;
