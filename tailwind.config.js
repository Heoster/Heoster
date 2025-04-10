/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8e44ad",
          50: "#f7f1fb",
          100: "#ede0f6",
          200: "#dbc2ec",
          300: "#c39adf",
          400: "#ab6dcf",
          500: "#9646be",
          600: "#8e44ad",
          700: "#75358d",
          800: "#5f2c72",
          900: "#4e2d5d",
          950: "#2d1237",
        },
        secondary: {
          DEFAULT: "#3498db",
          50: "#f0f7fd",
          100: "#e0eefa",
          200: "#bcddf5",
          300: "#83c3ed",
          400: "#48a6e1",
          500: "#3498db",
          600: "#1c75b1",
          700: "#185d8f",
          800: "#1a4f77",
          900: "#1c4264",
          950: "#122a41",
        },
        accent: {
          DEFAULT: "#2ecc71",
          50: "#effef6",
          100: "#d9fbea",
          200: "#b5f6d5",
          300: "#7fedb3",
          400: "#44db8d",
          500: "#2ecc71",
          600: "#15a052",
          700: "#148044",
          800: "#146539",
          900: "#135332",
          950: "#062f1b",
        },
        dark: "#2c3e50",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
  },
  plugins: [],
}
