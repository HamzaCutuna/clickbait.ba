/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Mulish', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'mulish': ['Mulish', 'system-ui', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '900',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '800',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '700',
            },
            h4: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '700',
            },
            h5: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '700',
            },
            h6: {
              fontFamily: 'Playfair Display, serif',
              fontWeight: '700',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
