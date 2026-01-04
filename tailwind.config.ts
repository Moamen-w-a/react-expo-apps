import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // كل الملفات داخل app
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
