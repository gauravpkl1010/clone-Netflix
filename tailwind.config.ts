import type { Config } from "tailwindcss";

const config: Config = {
  content: [
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
        diagonal: "linear-gradient(45deg, #000000, #420d09)",
        main: "url('/images/main.png')",
        box: "url('/images/netflix-1.png')",
        out: "url('/images/queen.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
