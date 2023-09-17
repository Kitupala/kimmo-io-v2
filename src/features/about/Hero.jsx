import classNames from "classnames";
import { useDarkMode } from "../../context/DarkModeContext";
import Container from "../../ui/Container";

function Hero() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Container className="min-h-[calc(100vh-280px)] overflow-hidden">
        <div className="mt-24 text-center">
          <h1 className="my-5 animate-fade-translate-in bg-gradient-to-br from-gradient-text from-25% to-gradient-text/[.45] bg-clip-text text-6xl tracking-tight text-transparent opacity-0 [--animation-delay:200ms] sm:text-8xl">
            Hi I&apos;m Kimmo
          </h1>

          <h2 className="[--animation-delay:400ms]text-red-600 mb-12 translate-y-[-1rem] animate-fade-translate-in text-lg text-primary-text opacity-0 sm:text-xl">
            Self-taught, self-motivated web developer. <br /> I&apos;m a pixel
            perfectionist <br className="block sm:hidden" /> &mdash; in a good
            way.
          </h2>

          <div className="mb-13 flex animate-zoom-in place-content-center opacity-0 [--animation-delay:900ms]">
            <img
              src="/images/ai-kt.jpg"
              alt="Futuristic AI generated picture of me"
              className={classNames(
                "h-[198px] rounded-full border-2 border-transparent-sm shadow-secondary",
                isDarkMode && "bg-hero-glow shadow-primary",
              )}
            />
          </div>

          <p className="mx-10 mb-4 animate-fade-in text-md text-primary-text opacity-0 [--animation-delay:1600ms] sm:mx-40">
            This site showcases some of my <span>recent studies</span> on Udemy
            online courses, including variety of UI desing examples. Always
            looking for new challenges. Do you have <span>one for me?</span>
          </p>

          <p className="mx-10 animate-fade-in text-md text-primary-text opacity-0 [--animation-delay:1600ms] sm:mx-40">
            I am a former musician <span>seeking for career path change</span>.
            I love riding fat bike on summery forest trails, <span>coding</span>
            , drumming, progressive music and my black Corvette ′77.
          </p>
        </div>
      </Container>
    </>
  );
}

export default Hero;
