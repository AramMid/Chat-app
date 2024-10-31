/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        background: '#091227',
        textPrimary: '#EAF0FF',
        textSecondary: '#A5C0FF',
        iconPrimary: '#EAF0FF',
        iconSecondary: '#8996B8',
    }
    },
    spacing :{
      xm: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    fontSize: {
      'custom-12': '12px',
      'custom-16': '16px',
      'custom-20': '20px',
      'custom-24': '24px',// Thêm kích thước font tùy chỉnh
    },
    fontFamily: {
      gilroy: ['Gilroy-Regular', 'sans-serif'],
      'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      'gilroy-light': ['Gilroy-Light', 'sans-serif'],
      'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
      'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
      'gilroy-semibold': ['Gilroy-SemiBold', 'sans-serif'],
    },
  },
  plugins: [],
}

