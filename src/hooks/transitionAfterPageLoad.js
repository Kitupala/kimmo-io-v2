/* ======================================================== */
/* Work around for toggling css classes to avoid            */
/* 'transition: background-color' flashing on page refresh  */
/* ======================================================== */

const transitionAfterPageLoad = () => {
  const body = document.getElementById("body");

  body.classList.add("no-transition");

  const addTransition = setTimeout(() => {
    body.classList.remove("no-transition");
    body.classList.add("transition");
  }, 1000);

  return () => clearTimeout(addTransition);
};

transitionAfterPageLoad();
