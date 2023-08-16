import classNames from "classnames";

function Container({ children, className }) {
  return (
    <div className={classNames("mx-auto max-w-[100rem] px-8", className)}>
      {children}
    </div>
  );
}

export default Container;
