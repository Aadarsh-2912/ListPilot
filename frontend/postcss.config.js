module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      config: './tailwind.config.js', // optional if Tailwind config is in root
    }),
    require('autoprefixer'),
  ],
};
