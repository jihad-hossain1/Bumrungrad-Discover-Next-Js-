/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: '#28266F',
      gold: '#896F4F',
      green: '#128C45',
      white: '#ffffff',
      black: '#000000',
      cream: '#DFE2F4',
      red: '#FF0000',
      ash: '#ACA6A5',
    },
    extend: {},
  },
  plugins: [],
};
