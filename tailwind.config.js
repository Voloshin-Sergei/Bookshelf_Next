module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        dark: 'var(--dark)',
        lighter: 'var(--lighter)',
        light: 'var(--light)',
        success: 'var(--success)',
        error: 'var(--error)',
        info: 'var(--info)',
        rate: 'var(--rate)',
      },
    },
  },
  plugins: [],
};
