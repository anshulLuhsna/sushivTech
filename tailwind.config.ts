import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightsteelblue: "rgba(197, 202, 250, 0.2)",
        gray: {
          "100": "rgba(0, 0, 0, 0.25)",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0.6)",
          "400": "rgba(0, 0, 0, 0.75)",
        },
        tomato: "#ff604d",
        white: "#fff",
        salmon: "rgba(253, 112, 95, 0.77)",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "3xs": "10px",
      },
    },
    
    corePlugins: {
      preflight: false,
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
export default config;
