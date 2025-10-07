import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse 100% 100% at 50% 0%, #ea2424ff 0%, #00ddedff 100%)',
      },
      fontFamily: {
        'jost': 'var(--font-jost)',
        'inter': 'var(--font-inter)',
      },
    },
  },
  plugins: [],
} satisfies Config;
