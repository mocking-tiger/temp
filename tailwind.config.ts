import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(select|listbox|divider|popover|button|ripple|spinner|scroll-shadow).js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-offset": "24px 24px 10px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        codeit_purple: "#6500c3",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spin-slow-reverse": "spin-reverse 6s linear infinite",
        "move-right": "move-right 10s linear infinite",
        "move-right2": "move-right2 10s linear infinite",
      },
      keyframes: {
        "spin-reverse": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-360deg)",
          },
        },
        "move-right": {
          from: {
            transform: "translateX(0%)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
        "move-right2": {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
