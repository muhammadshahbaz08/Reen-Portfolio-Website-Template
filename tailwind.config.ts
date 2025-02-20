import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans 3", "sans-serif"],
      },
      colors: {
        primary: "#f5f7fa",
        text: "#506a85",
        // secondary: "#FF9357",
        // sectionBg: "#F2F7FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
