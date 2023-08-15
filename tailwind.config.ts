import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: "#5551ff",
        gray: "#ffffff",
        lightGray: "#e2e2e2",
        lightGray2: "#d9d9d9",
        lightGray3: "#cccccc",
        lightGray4: "#b3b3b3",

        lightBlue: "#80caff",
        lime: "#e4ff97",
        purpleViolet: "#c7b9ff",
        teal: "#0fa958",
        yellow: "#fafd5d",
      },
    },
  },
  plugins: [],
};
export default config;
