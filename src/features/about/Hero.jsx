import Container from "../../ui/Container";

function Hero() {
  return (
    <Container className="overflow-hidden pt-8">
      <div className="text-center">
        <h1 className="text-gradient animate-fade-translate-in my-5 translate-y-[-1rem] text-6xl tracking-tight opacity-0 [--animation-delay:200ms] sm:text-8xl">
          Hi I&apos;m Kimmo
        </h1>

        <p className="animate-fade-translate-in mb-12 translate-y-[-1rem] text-lg text-primary-text opacity-0 [--animation-delay:400ms] sm:text-xl">
          Self-taught, self-motivated web developer. <br /> I&apos;m a pixel
          perfectionist <br className="block sm:hidden" /> &mdash; in a good
          way.
        </p>

        <div className="animate-zoom-in mb-13 flex place-content-center opacity-0  [--animation-delay:900ms]">
          <img
            src="/ai-kt.jpg"
            alt="Futuristic AI generated picture of me"
            className="h-[198px] rounded-full border-2 border-transparent-white bg-hero-glow shadow-primary"
          />
        </div>

        <p className="mx-10 mb-4 translate-y-[-1rem] animate-fade-in text-md text-primary-text opacity-0 [--animation-delay:1600ms] sm:mx-40">
          This site showcases some of my <span>recent studies</span> on Udemy
          online courses, including variety of UI desing examples. Always
          looking for new challenges. Do you have <span>one for me?</span>
        </p>

        <p className="mx-10 translate-y-[-1rem] animate-fade-in text-md text-primary-text opacity-0 [--animation-delay:1600ms] sm:mx-40">
          I am a former musician <span>seeking for career path change</span>. I
          love riding fat bike on summery forest trails, <span>coding</span>,
          drumming, progressive music and my black Corvette ′77.
        </p>
      </div>
    </Container>
  );
}

export default Hero;
