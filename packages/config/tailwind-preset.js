// 모바일 기조의 스타일링을 우선시 합니다.
// 웹 전용 config은 고려하지 않습니다.

module.exports = {
  content: [
    './index.html',
    './packages/**/*.{js,ts,jsx,tsx}',
    './micro_services/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: ['10px', '15px'],
      sm: ['13px', '20px'],
      base: ['15px', '22px'],
      lg: ['17px', '24px'],
      xl: ['20px', '28px'],
      '2xl': ['23px', '32px'],
      '3xl': ['26px', '35px'],
    },
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
      keyframes: {
        push: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(0.975)' },
        },
      },
      animation: {
        push: 'push .2s ease-out forwards',
      },
    },
  },
};
