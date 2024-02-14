/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
};
module.exports = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
