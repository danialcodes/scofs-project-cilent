module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-right': "url('/src/images/login-right.jpg')",
        'login-left': "url('/src/images/logo.png')",
      }
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
}
