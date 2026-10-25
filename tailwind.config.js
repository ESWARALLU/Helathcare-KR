/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          // "teal" is the site's brand-blue scale: Deep Ocean Blue (#1A365D) at 600,
          // darkening toward navy at 700-800. 900 is reserved as Charcoal Grey
          // (#2D3748) for running text, per the brand's dedicated "Text Dark" role.
          50: '#F2F5F9',
          100: '#E1E8F0',
          200: '#C3D1E2',
          300: '#99AFCA',
          400: '#6485A8',
          500: '#2F5880',
          600: '#1A365D',
          700: '#152C4B',
          800: '#102238',
          900: '#2D3748',
        },
        sage: {
          // AYUSH / Ayurvedic green accent, anchored on #3B7A57 at 500.
          50: '#EFF6F1',
          100: '#D9EBDD',
          200: '#B3D7BC',
          300: '#8CC29B',
          400: '#639E76',
          500: '#3B7A57',
          600: '#2F6346',
          700: '#254F38',
        },
        marigold: {
          // Muted Marigold / Ochre — used sparingly for Home Care & Telemedicine CTAs.
          50: '#FDF3E7',
          100: '#FBE3C2',
          500: '#D97706',
          600: '#B45E05',
        },
        cream: '#FDFBF7',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
