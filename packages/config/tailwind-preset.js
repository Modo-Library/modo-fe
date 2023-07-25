module.exports = {
  content: [
    './index.html',
    './packages/**/*.{js,ts,jsx,tsx}',
    './micro_services/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      nw: '100vw',
      nh: '100vh',
      full: '768px',
    },
    boxShadow: {
      layout: '0 -1px 6px 3.5px rgb(0 0 0 / 0.15);',
    },
    minWidth: {
      layout: '280px',
    },
    maxWidth: {
      layout: '25rem',
    },
    fontFamily: {
      pretendard: [
        'Pretendard Variable',
        'Pretendard',
        '-apple-system',
        'BlinkMacSystemFont',
        'system-ui',
        'Roboto',
        'Helvetica Neue',
        'Segoe UI',
        'Apple SD Gothic Neo',
        'Noto Sans KR',
        'Malgun Gothic',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'san-serif',
      ],
    },
    extend: {
      colors: {
        black100: '#212121',
        black50: '#333333',
        gray100: '#999999',
        brown100: '#6B5D54',
        brown50: '#93796A',
        brown30: '#C7B199',
        brown10: '#D4B495',
        orange100: '#FF805D',
      },
      width: {
        layout: '25rem',
      },
      keyframes: {
        push: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(0.975)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        showRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(-10%)' },
        },
      },
      animation: {
        push: 'push .2s ease-out forwards',
        fadeIn: 'fadeIn .35s ease-in-out forwards',
        showRight: 'showRight .35s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
    },
  },
};
