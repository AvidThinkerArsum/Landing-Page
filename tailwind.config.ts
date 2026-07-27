import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'from-rose-600',
    'from-red-600',
    'from-orange-500',
    'from-blue-600',
    'from-indigo-600',
    'from-indigo-800',
    'from-purple-600',
    'from-emerald-600',
    'from-green-600',
    'from-teal-600',
    'from-violet-600',
    'from-fuchsia-600',
    'from-amber-500',
    'from-yellow-500',
    'from-orange-600',
    'from-cyan-700',
    'via-red-600',
    'via-indigo-600',
    'via-green-600',
    'via-emerald-600',
    'via-purple-600',
    'via-yellow-500',
    'via-slate-700',
    'via-sky-600',
    'to-orange-500',
    'to-purple-600',
    'to-teal-600',
    'to-teal-500',
    'to-fuchsia-600',
    'to-orange-600',
    'to-blue-600',
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        depth: {
          1: "rgb(var(--depth-1))",
          2: "rgb(var(--depth-2))",
          3: "rgb(var(--depth-3))",
        },
        accent: {
          red: "rgb(var(--accent-red))",
          orange: "rgb(var(--accent-orange))",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
