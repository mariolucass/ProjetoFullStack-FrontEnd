export const transitionSpring = {
  default: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  },
  scale: {
    duration: 0.3,
    type: "spring",
    damping: 4,
    stiffness: 100,
    restDelta: 0.001,
  },
};

export const transitionLetter = {
  duration: 1.5,
  type: "spring",
  ease: [0.2, 0.65, 0.3, 0.9],
};

export const transitionText = {
  delay: 1,
  type: "spring",
  staggerChildren: 0.08,
};

export const transitionAccordion = {
  type: "spring",
  damping: 10,
  mass: 0.75,
  stiffness: 100,
  delay: 0.2,
};

export const transitionSpring1 = {
  duration: 1,
  ease: "easeInOut",
  times: [0, 0.2, 0.5, 0.8, 1],
  repeatDelay: 1,
};
