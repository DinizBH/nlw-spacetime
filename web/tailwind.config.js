/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        stripes: "linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 12.5%, transparent 12.5%, transparent 100%)",
      },
      backgroundSize: {
        stripes: '100% 8px',
      },
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [],
}
