import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          active: '#6b32ec',
          background: '#f5f5ff',
          iconColor: '#636c80',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;
