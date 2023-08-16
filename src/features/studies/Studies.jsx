import Container from "../../ui/Container";
import { IoConstructOutline } from "react-icons/io5";

function Studies() {
  return (
    <Container className="min-h-[calc(100vh-285px)] overflow-hidden pt-16">
      <div className="mt-6 flex flex-col text-center">
        <h2 className="text-gradient my-6 text-6xl tracking-tight sm:text-7xl">
          Sit tight.
        </h2>

        <p className="mx-5 flex items-center justify-center text-md text-primary-text sm:mx-20 sm:text-lg">
          I&apos;m currently working on &lt;Studies /&gt; page{" "}
          <br className="block sm:hidden" /> and will launch ASAP...
          <span className="animate-fade-in-out ml-2 inline-block flex hidden text-3xl md:block">
            <IoConstructOutline />
          </span>
        </p>
      </div>
    </Container>
  );
}

export default Studies;
