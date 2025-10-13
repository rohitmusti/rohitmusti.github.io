module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Deep navy from shawl base
        navy: {
          50: '#e6eaf0',
          100: '#ccd5e1',
          200: '#99abc3',
          300: '#6681a5',
          400: '#335787',
          500: '#1a2d4a',
          600: '#15243b',
          700: '#101b2c',
          800: '#0a121e',
          900: '#050911', // Primary background
          950: '#030509',
        },
        // Golden mustard from embroidery
        gold: {
          50: '#fefbf3',
          100: '#fdf7e7',
          200: '#fbefcf',
          300: '#f8e7b7',
          400: '#f6df9f',
          500: '#D4AF37', // Primary bright gold
          600: '#C19A2E',
          700: '#9A7B25',
          800: '#735C1C',
          900: '#4D3D13',
        },
        // Burnt orange/terracotta from florals
        terracotta: {
          50: '#fef3f0',
          100: '#fde7e1',
          200: '#fbcfc3',
          300: '#f9b7a5',
          400: '#f79f87',
          500: '#E07A5F', // Primary terracotta
          600: '#CD6A4F',
          700: '#A4553F',
          800: '#7B402F',
          900: '#522B20',
        },
        // Rust/copper tones
        rust: {
          50: '#fdf0ed',
          100: '#fbe1db',
          200: '#f7c3b7',
          300: '#f3a593',
          400: '#ef876f',
          500: '#B85C38', // Primary rust
          600: '#A65232',
          700: '#854228',
          800: '#64321e',
          900: '#432114',
        },
        // Olive/moss green from leaves
        olive: {
          50: '#f7f8f3',
          100: '#eff1e7',
          200: '#dfe3cf',
          300: '#cfd5b7',
          400: '#bfc79f',
          500: '#8B9556', // Primary olive
          600: '#7D864D',
          700: '#646b3e',
          800: '#4b502e',
          900: '#32351f',
        },
        // Cream/beige from light florals
        cream: {
          50: '#fdfcfa',
          100: '#fbf9f5',
          200: '#f7f3eb',
          300: '#f3ede1',
          400: '#efe7d7',
          500: '#E8DCC4', // Primary cream
          600: '#D4C6B0',
          700: '#AA9E8D',
          800: '#80776a',
          900: '#565047',
        },
        // Deep maroon from flower accents
        maroon: {
          50: '#fbeef3',
          100: '#f7dde7',
          200: '#efbbcf',
          300: '#e799b7',
          400: '#df779f',
          500: '#8B2E4D', // Primary maroon
          600: '#7D2945',
          700: '#642137',
          800: '#4b1929',
          900: '#32111c',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
