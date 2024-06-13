import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#111111",
      white: "#FFFFFF",
      warning: "#BA5959",
      success: "#93C47D",
      primary: "#EFF28D",
      secondary: "#6B999C",
      terciary: "#582359",
    },
  },
  plugins: [],
};
export default config;
