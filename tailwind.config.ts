import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b08d82', // Màu chính trong ảnh
        secondary: '#f8f8f8',
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'], // Font giống như trên ảnh
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
