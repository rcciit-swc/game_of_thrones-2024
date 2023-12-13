import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        got: ["Got", "sans-serif"],
      },
      colors: {
        primary: "#F8714B",
        secondary: "#2D3493",
        body: "#1E1E1E",
        neutral: "#FEFEFA",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
