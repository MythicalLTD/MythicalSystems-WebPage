import { type Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        backdropBlur: {
            sm: '4px',
        }
    }
  },
  plugins: [],
} satisfies Config

