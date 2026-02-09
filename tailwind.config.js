/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(9 9 11)",
        foreground: "rgb(250 250 250)",

        primary: "rgb(0 240 255)",
        "primary-foreground": "rgb(9 9 11)",

        secondary: "rgb(255 60 172)",
        "secondary-foreground": "rgb(9 9 11)",

        muted: "rgb(39 39 42)",
        "muted-foreground": "rgb(161 161 170)",
      },
    },
  },
  plugins: [],
}
