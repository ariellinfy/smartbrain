import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/theme';

const config: Config = {
  content: [
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-30": "linear-gradient(30deg, var(--tw-gradient-stops))",
      },
    },
  },
  
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
