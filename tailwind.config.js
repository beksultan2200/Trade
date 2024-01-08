/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue_color: "#062856",
        violet: "#6B36D5",
        pink: "#E6BBF7",
        darkPink: "#B568D4",
        gradientPurple: "linear-gradient(109deg, #6438db 0.47%, #8b2ab2 100%)",
        gray: "#666565",
        blue: "#27A6E5",
        green: "#48C95F",
      },
      backgroundImage: {
        "bg-hero": "url('/bg.jpg')",
        "bg-feedback": "url('/blob.jpg')",
        "bg-mentors": "url('/bgMentors.jpeg')",
      },
      responsive: {
        flex_between: "flex justify-between items-center",
        font_size: "",
      },
      boxShadow: {
        shadowL: "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
