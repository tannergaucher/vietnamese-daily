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
        "eb-garamond": ['"EB Garamond"', "serif"],
      },
      colors: {
        "bg-1": {
          light: "#fff5f5", // A very light red
          dark: "#2c1a1a", // A very dark red
        },
        "bg-2": {
          light: "#ff6060", // A darker red
          dark: "#ff4040", // A darker red
        },
        "text-color": {
          light: "#4b2c20", // A dark brown, softer than black
          dark: "#ffd700", // Gold color for the star
        },
        "accent-1": {
          light: "#ff0", // Bright yellow for the star
          dark: "#ff0", // Bright yellow for the star
        },
        "accent-2": {
          light: "#d60000", // Red for the flag background
          dark: "#d60000", // Red for the flag background
        },
      },
      variants: {
        extend: {
          backgroundColor: ["dark"],
          textColor: ["dark"],
        },
      },
    },
  },
  plugins: [],
};
export default config;
