
export const sectionsVariantY = {
  hidden: {
    y: '100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.5,
    }
  }
};

//Slides the menu in from the top of the screen and exist in reverse order.
export const menuVariantY = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      staggerChildren: 0.15, delayChildren: 0.4
    }
  },
  exit: {
    y: '-100vh',
    opacity: 0,
    transition: {
      delay: 0.6, //Duration before retracting the menu
      type: 'tween',
      duration: 2, // speed at which the menu retracts
      staggerChildren: 0.15, staggerDirection: -1
    },
  }
};

export const menuVariantY2 = {
  hidden: {
    y: '-4vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      staggerChildren: 0.15, delayChildren: 0.4
    }
  },
  exit: {
    y: '-4vh',
    opacity: 0,
    transition: {
      //delay: 0.2, //Duration before retracting the menu
      type: 'tween',
      duration: 0.2, // speed at which the menu retracts
      staggerChildren: 0.15, staggerDirection: -1 
    },
  }
};

//Slides the menu in from the side of the screen and exist in reverse order.
export const menuVariantX = {
  hidden: {
      x: '100vw'
  },
  visible: {
      x: 0,
      transition: {
      type: 'tween', 
      duration: 0.5,
      staggerChildren: 0.15, delayChildren: 0.4
      }
  },
  exit: {
      x: '100vw',
      transition: {
      delay: 0.6,
      type: 'tween',
      duration: 1,
      staggerChildren: 0.15, staggerDirection: -1 
      },
  }
};

export const menuVariantX2 = {
  hidden: {
      x: '4vw'
  },
  visible: {
      x: 0,
      transition: {
      type: 'tween', 
      duration: 0.5,
      staggerChildren: 0.15, delayChildren: 0.4
      }
  },
  exit: {
      x: '4vw',
      transition: {
      //delay: 0.6,
      type: 'tween',
      duration: 0.1,
      staggerChildren: 0.15, staggerDirection: -1 
      },
  }
};

export const childrenVariantY = {
  hidden: {
      y: 100,
      opacity: 0
  },
  visible: {
      y: 0,
      opacity: 1
  },
  exit: {
      y: 100,
      opacity: 0
  }
}

export const childrenVariantY2 = {
  hidden: {
      y: -50,
      opacity: 0
  },
  visible: {
      y: 0,
      opacity: 1
  },
  exit: {
      y: 50,
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.1,
      },
  }
}

export const childrenVariantX = {
  hidden: {
      x: 50,
      opacity: 0
  },
  visible: {
      x: 0,
      opacity: 1
  },
  exit: {
      x: -50,
      opacity: 0
  }
}

export const buttonVariants = {
    hidden: {
      "--x": "100%",
      scale: 1
    },
    visible: {
      "--x": "-100%",
      transition: {
        "--x": {
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2
        },
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1
        }
      }
    },
};
  