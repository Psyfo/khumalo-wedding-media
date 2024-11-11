import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        'text-sm': '1px 1px 0 rgba(0, 0, 0, 0.5)', // Small shadow
        'text-md': '2px 2px 0 rgba(0, 0, 0, 0.5)', // Medium shadow
        'text-lg': '4px 4px 0 rgba(0, 0, 0, 0.5)', // Large shadow
        // Add more shadows as needed
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        weddingPink: '#FEF1EC',
      },
      fontFamily: {
        brandon: ['BrandonGrotesque', 'sans-serif'],
        calibri: ['Calibri', 'sans-serif'],
        canela: ['Canela', 'serif'],
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
