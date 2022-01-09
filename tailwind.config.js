module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'body-bg-c': 'var(--body-bg-color)',
        'primary-c': 'var(--primary-color)',
        'secondary-c': 'var(--secondary-color)',
        'secondary-dark-c': 'var(--secondary-dark-color)',
        'text-dark-c': 'var(--text-dark-color)',
        'text-lighter-c': 'var(--text-lighter-color)',
        'text-light-c': 'var(--text-light-color)',
        'success-c': 'var(--success-color)',
        'error-c': 'var(--error-color)',
        'info-c': 'var(--info-color)',
        'rate-c': 'var(--rate-color)',
      },
    },
  },
  plugins: [],
};
