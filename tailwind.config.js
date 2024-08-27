/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',       // Vibrant blue
        secondary: '#50E3C2',     // Fresh teal
        warning: '#F5A623',       // Bright orange
        text: '#333333',          // Deep gray (almost black)
        heading: '#1A1A1A',       // Darker gray for headings
        sectionBg: '#F2F4F7',     // Light gray for section backgrounds
        cartBg: '#FFFFFF',        // Clean white for cart backgrounds
        lightBg: '#FAFAFA',       // Very light gray (almost white) for light background
        lightText: '#757575',     // Medium gray for lighter text elements
        danger: '#E74C3C',        // Strong red for error or danger alerts
      },
    },
  },
  plugins: [],
}

