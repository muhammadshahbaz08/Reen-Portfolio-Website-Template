import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // This centers the container

      screens: {
        sm: "540px", // Container width at sm breakpoint
        md: "720px", // Container width at md breakpoint
        lg: "960px", // Container width at lg breakpoint
        xl: "1160px", // Container width at xl breakpoint
      },
    },
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
      scrollBehavior: {
        smooth: "smooth",
      },
    },
  },
  plugins: [],
} satisfies Config;
