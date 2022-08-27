export const headerParticles = {
  background: {
    color: {
      value: "#0C070D",
    },
  },
  pauseOnOutsideViewport: true,
  zLayers: 500,
  fullScreen: true,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    position: {
      value: "absolute",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      directions: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 0.6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 75,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "square",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
};

export const particlesConfig = {
  background: {
    color: {
      value: "#232741",
    },

    position: "0% 50%",
    repeat: "no-repeat",
    size: "20%",
  },
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 250,
        duration: 2,
        opacity: 0,
        size: 0,
      },
      grab: {
        distance: 400,
      },
      repulse: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 600,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: true,
      speed: 1,
    },
    number: {
      density: {
        enable: true,
      },
      value: 160,
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0,
        max: 1,
      },
      animation: {
        enable: true,
        speed: 1,
        minimumValue: 0,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 1,
        max: 3,
      },
      animation: {
        speed: 4,
        minimumValue: 0.3,
      },
    },
  },
};
export default particlesConfig;
