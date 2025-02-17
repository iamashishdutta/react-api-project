/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // ✅ Ensure index.html is included for proper class scanning
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Scans all React files inside src/
  ],
  theme: {
    extend: {}, // ✅ Add custom styles here if needed
  },
  plugins: [],
};
