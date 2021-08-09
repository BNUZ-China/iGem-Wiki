const igemWikiWebpackPlugin = require('igem-wiki-webpack-plugin');
const igemConfig = {
  year: 2021,
  team_name: 'BNUZ-China'
}

const ENV = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
  PRODUCTION_LOCAL: 'production_local',
  PRODUCTION_ONLINE_TEST: 'production_online_test'
}

var javascriptSrc = function (origin) {
  switch (process.env.NODE_ENV) {
    case ENV.PRODUCTION:
      return origin.replace('js/', `https://${year}.igem.org/wiki/index.php?title=Template:${teamname}/scripts/`)
          .replace('.js', '')
        + '&action=raw&ctype=text/javascript';
    case ENV.PRODUCTION_ONLINE_TEST:
      return origin.replace('js/', `https://${year}.igem.org/wiki/index.php?title=Template:${teamname}/scripts/test/`)
          .replace('.js', '')
        + '&action=raw&ctype=text/javascript';
    default:
      return origin
  }
}

var preprocessor = function (tagDefinition) {
  if (tagDefinition.tagName === 'script') {
    let result = tagDefinition;
    result.attributes.src = javascriptSrc(result.attributes.src);
    return result;
  }
  return tagDefinition
}

const year = igemConfig.year;
const teamname = igemConfig.team_name;
const teamname_replace = teamname.replace('-', '_'); // 文件路径中的短横线替换完下划线

var igemWikiWebpackPluginConfigGenerator = function (conf) {
  const entry = conf.configureWebpack.entry;
  const keys = Object.keys(entry);
  var singleConfGen = function (name) {
    return new igemWikiWebpackPlugin({
      template: `public/${name}.html`,
      filename: `${name}.html`,
      templateParameters: {
        BASE_URL: './'
      },
      chunks: [name],
      tagDefinitionPreprocessor: preprocessor
    })
  }

  if (conf.configureWebpack.plugins === undefined) {
    conf.configureWebpack.plugins = []
  }
  let plugins = conf.configureWebpack.plugins;
  for (let name of keys) {
    plugins.push(singleConfGen(name))
  }

  return conf
}

var getStaticPath = function () {
  switch (process.env.NODE_ENV) {
    case ENV.DEVELOPMENT:
      return './';
    case ENV.PRODUCTION:
      return `https://${year}.igem.org/File:T--${teamname_replace}--`;
    case ENV.PRODUCTION_LOCAL:
      return './';
    case ENV.PRODUCTION_ONLINE_TEST:
      return `https://${year}.igem.org/File:T--${teamname_replace}--`;
    default:
      return null;
  }
}

let config = {
  publicPath: process.env.PUBLIC_PATH,
  outputDir: process.env.OUTPUT_PATH,
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      index: './src/index.js',
      sample: './src/main.js'
    }
  },
  chainWebpack: config => {
    config
      .module
      .rule("images")
      .test(/\.(jpe?g|png|gif|svg)$/i)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 1,
        publicPath: getStaticPath(),
        outputPath: 'img',
        name: '[name].[hash:8].[ext]'
      })
      .end()
  }
};

module.exports = igemWikiWebpackPluginConfigGenerator(config);