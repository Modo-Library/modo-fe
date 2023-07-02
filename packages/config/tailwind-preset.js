module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      nw: '100vw',
      nh: '100vh',
      full: '576px',
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
    },
  },
};
