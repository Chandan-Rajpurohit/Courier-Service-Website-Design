import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#C8212C", // Bright Red
          foreground: "#FFFFFF",
          50: "#FEF2F2",
          100: "#FDE8E8",
          200: "#FBD1D5",
          300: "#F8B5BB",
          400: "#F179A3",
          500: "#E53A5C",
          600: "#C8212C",
          700: "#A01828",
          800: "#781220",
          900: "#500C18",
        },
        secondary: {
          DEFAULT: "#D85521", // Orange
          foreground: "#FFFFFF",
          50: "#FEF5F2",
          100: "#FDEAE4",
          200: "#FBD1C8",
          300: "#F8B8AC",
          400: "#F5A090",
          500: "#D85521",
          600: "#C04818",
          700: "#A83B10",
          800: "#902E0C",
          900: "#782108",
        },
        accent: {
          DEFAULT: "#F77B21", // Gold Orange
          foreground: "#FFFFFF",
          50: "#FFFBF5",
          100: "#FEF8EB",
          200: "#FDF0D7",
          300: "#FCE8C3",
          400: "#FBE0AF",
          500: "#F77B21",
          600: "#E86F1A",
          700: "#D96314",
          800: "#CB570D",
          900: "#BD4B06",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "pulse-slow": "pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
