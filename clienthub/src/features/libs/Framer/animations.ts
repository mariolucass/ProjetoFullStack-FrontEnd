import * as transitions from "./transitions";

export const animateHiddenRegister = {
  transform: "translateX(100px)",
  opacity: 0,
  scale: 0.3,
  transition: transitions.transitionSpring1,
};
export const animateHiddenLogin = {
  transform: "translateX(-100px)",
  opacity: 0,
  scale: 0.3,
  transition: transitions.transitionSpring1,
};

export const animateShowingRegister = {
  transform: "translateX(0px)",
  opacity: 1,
  scale: 1,
  transition: transitions.transitionSpring1,
};
export const animateShowingLogin = {
  transform: "translateX(0px)",
  opacity: 1,
  scale: 1,
  transition: transitions.transitionSpring1,
};

export const animateHiddenLeave = {
  transform: "translateX(100%)",
  opacity: 0,
  scale: 0.3,
  transition: transitions.transitionAccordion,
};

export const animateShowingLeave = {
  transform: "translateX(0px)",
  opacity: 1,
  scale: 1,
  transition: transitions.transitionAccordion,
};

export const animateDisplayNone = {
  display: "none",
};

export const animateTap = { scale: 0.9 };
export const animateHover = {
  scale: 0.97,
  transition: { duration: 0.3 },
};
