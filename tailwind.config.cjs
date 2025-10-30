
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors:{ brand:'#e11d48', paper:'#0e0f12' },
      backgroundImage:{ 'hero-youware': "url('/src/assets/youware-bg.png')" }
    }
  },
  plugins: []
}
