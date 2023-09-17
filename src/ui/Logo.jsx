import LogoIcon from "./LogoIcon";

function Logo() {
  return (
    <div className="flex items-center">
      <LogoIcon className="h-10 w-10" />

      <p className="font-cursive -ml-1 bg-hero-glow bg-clip-text text-4xl text-transparent">
        kimmo.io
      </p>
    </div>
  );
}

export default Logo;
