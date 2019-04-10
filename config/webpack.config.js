var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var myCustomENV = process.env.APP_ENV;
myCustomENV = myCustomENV ? myCustomENV.toLowerCase() : 'dev';

useDefaultConfig.prod.resolve.alias = {
  "@app/env": path.resolve(environmentPath(myCustomENV))
};

useDefaultConfig.dev.resolve.alias = {
  "@app/env": path.resolve(environmentPath(myCustomENV))
};

function environmentPath(env) {
  var filePath = './src/environment/env.' + env + '.ts';
  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist, default use dev environment config!'));
    filePath = './src/environment/env.dev.ts';
  }
  return filePath;
}

module.exports = function () {
  return useDefaultConfig;
};
