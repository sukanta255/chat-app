// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'oklch(var(--border) / <alpha-value>)',
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        // optional:
        card: 'oklch(var(--card) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        destructive: 'oklch(var(--destructive) / <alpha-value>)',
        primary: 'oklch(var(--primary) / <alpha-value>)',
        secondary: 'oklch(var(--secondary) / <alpha-value>)',
      },
    },
  },
  darkMode: 'class', // Required for dark mode
  plugins: [],
}
