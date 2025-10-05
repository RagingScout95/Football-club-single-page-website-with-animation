/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-100': '#212121',
        'dark-200': '#181818',
      },
      backdropBlur: {
        'xs': '2px',
      },
      // Container max-widths to prevent excessive spreading
      maxWidth: {
        'container': '1400px',  // Maximum comfortable reading/viewing width
        'content': '1200px',     // For text-heavy sections
        'wide': '1600px',        // For hero/full-width sections
      },
      // Responsive spacing that scales with screen
      spacing: {
        'section': 'clamp(2rem, 5vw, 6rem)',
      }
    },
    // Override default Tailwind container behavior
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
  },
  plugins: [],
}