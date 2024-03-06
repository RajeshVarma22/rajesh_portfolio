export const parentVarints = {
  hidden: {
    y: "100%",
  },
  show: {
    y: "0%",
    transition: { duration: 1, delay: 0.8 },
  },
};

export const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};


export const staggerChildItem = {
  hidden: { y: "30%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.6 } },
};