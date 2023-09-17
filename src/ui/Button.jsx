import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";

const buttonClasses = cva("rounded-full inline-flex items-center", {
  variants: {
    variant: {
      primary: [
        "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow]",
        "[&_.icon-wrapper]:ml-2",
      ],
      secondary: ["hover:text-shadow hover:shadow-primary bg-transparent"],
      // secondary: ["bg-page-gradient hover:text-shadow hover:shadow-primary"],

      tertiary: [
        "text-highlight-text bg-white bg-opacity-10 border border-transparent-sm backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
        "[&_.icon-wrapper]:bg-transparent-sm [&_.icon-wrapper]:rounded-full [&_.icon-wrapper]:px-2 [&_.icon-wrapper]:ml-2 [&_.icon-wrapper]:-mr-2 ",
      ],
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export function IconWrapper({ children }) {
  return <span className="icon-wrapper">{children}</span>;
}

function Button({ children, to, variant, size }) {
  return (
    <Link className={buttonClasses({ variant, size })} to={to}>
      {children}
    </Link>
  );
}

export default Button;
