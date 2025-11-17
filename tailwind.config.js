/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // For the main HTML file if you're using Vite
    "./src/**/*.{js,ts,jsx,tsx}", // Path to all your React components and other source files
  ],
  theme: {
    extend: {
      // You can extend Tailwind's default theme here
      // For example, custom colors, fonts, spacing, etc.
      // colors: {
      //   'primary': '#FF6363',
      //   'secondary': '#6366F1',
      // },
      // fontFamily: {
      //   'sans': ['Inter', 'sans-serif'],
      // },
    },
  },
  plugins: [
    // Add any Tailwind CSS plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};