import type { Config } from "tailwindcss";

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

  plugins: [],
};
export default config;
