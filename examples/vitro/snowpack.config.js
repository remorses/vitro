
const path = require('path')
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  alias: {
    __root__: path.resolve(__dirname, '..')
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    './plugin.js'
  ],
  webModulesUrl: path.join(__dirname, 'web_modules'),
  installOptions: {
    dest: path.join(__dirname, 'web_modules'),
    metaDir: path.join(__dirname, 'web_modules')
  }
};
