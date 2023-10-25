// craco.config.js
module.exports = {
  devServer: (cfg) => { cfg.headers = { 'X-Frame-Options': 'Deny', 'X-Content-Type-Options': 'nosniff', 'Strict-Transport-Security' : 'max-age=63072000; includeSubDomains; preload' }; return cfg},
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
