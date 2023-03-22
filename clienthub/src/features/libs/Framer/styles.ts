export const variants = {
  variantA: {
    scale: 1,
  },
  variantB: {
    scale: 0.8,
  },
};

export const styleHidden = {
  transform: "none",
  opacity: 1,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style1Show = {
  transform: "translateX(400px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style2Show = {
  transform: "translateX(-400px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style3Show = {
  transform: "translateY(0px)",
  opacity: 0,
  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
};

export const style4Show = {};
