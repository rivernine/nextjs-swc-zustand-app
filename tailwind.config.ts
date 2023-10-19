import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'bg': '#F8FAFD',
      'signature': '#274799',
      'sub-1': '#FFD700',
      'sub-2': '#7EC0EE',
      'sub-3': '#7FFF7F',
      'gray': '#999999',
      'lightgray': '#cccccc',
      'white': '#ffffff',
      'red': '#FF0000',
    }
  },
  plugins: [],
}
export default config
