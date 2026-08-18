import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#066BFF", electric: "#0085FF", dark: "#061B38", deep: "#031426", light: "#EAF3FF" },
        ink: "#061B38",
        muted: "#64748B"
      },
      boxShadow: { soft: "0 20px 50px -30px rgba(15, 23, 42, .28)" }
    }
  },
  plugins: []
};
export default config;
