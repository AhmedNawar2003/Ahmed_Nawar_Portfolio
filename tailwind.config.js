// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        keyframes: {
          moveX: {
            "0%, 100%": { transform: "translateX(0)" },
            "50%": { transform: "translateX(15px)" },
          },
          wiggle: {
            "0%, 100%": { transform: "rotate(-3deg)" },
            "50%": { transform: "rotate(3deg)" },
          },
        },
        animation: {
          moveX: "moveX 4s ease-in-out infinite",
          wiggle: "wiggle 2s ease-in-out infinite",
        },
      },
    },
    plugins: [],
  };
  