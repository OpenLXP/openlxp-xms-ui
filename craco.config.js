// craco.config.js
module.exports = {
  devServer: (cfg) => { cfg.headers = { 'X-Frame-Options': 'Deny' }; return cfg},
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
