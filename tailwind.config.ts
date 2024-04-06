import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        "made-alt-black": ["MADE Outer Sans Alt Black", "sans-serif"],
        "made-alt-bold": ["MADE Outer Sans Alt Bold", "sans-serif"],
        "made-alt-light": ["MADE Outer Sans Alt Light", "sans-serif"],
        "made-alt-medium": ["MADE Outer Sans Alt Medium", "sans-serif"],
        "made-alt-regular": ["MADE Outer Sans Alt Regular", "sans-serif"],
        "made-alt-thin": ["MADE Outer Sans Alt Thin", "sans-serif"],
        "made-black": ["MADE Outer Sans Black", "sans-serif"],
        "made-bold": ["MADE Outer Sans Bold", "sans-serif"],
        "made-light": ["MADE Outer Sans Light", "sans-serif"],
        "made-medium": ["MADE Outer Sans Medium", "sans-serif"],
        "made-outline-alt-black": [
          "MADE Outer Sans Outline Alt Black",
          "sans-serif",
        ],
        "made-outline-alt-bold": [
          "MADE Outer Sans Outline Alt Bold",
          "sans-serif",
        ],
        "made-outline-alt-light": [
          "MADE Outer Sans Outline Alt Light",
          "sans-serif",
        ],
        "made-outline-alt-medium": [
          "MADE Outer Sans Outline Alt Medium",
          "sans-serif",
        ],
        "made-outline-alt-regular": [
          "MADE Outer Sans Outline Alt Regular",
          "sans-serif",
        ],
        "made-outline-alt-thin": [
          "MADE Outer Sans Outline Alt Thin",
          "sans-serif",
        ],
        "made-outline-black": ["MADE Outer Sans Outline Black", "sans-serif"],
        "made-outline-bold": ["MADE Outer Sans Outline Bold", "sans-serif"],
        "made-outline-light": ["MADE Outer Sans Outline Light", "sans-serif"],
        "made-outline-medium": ["MADE Outer Sans Outline Medium", "sans-serif"],
        "made-outline-regular": [
          "MADE Outer Sans Outline Regular",
          "sans-serif",
        ],
        "made-outline-thin": ["MADE Outer Sans Outline Thin", "sans-serif"],
        "made-regular": ["MADE Outer Sans Regular", "sans-serif"],
        "made-thin": ["MADE Outer Sans Thin", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
