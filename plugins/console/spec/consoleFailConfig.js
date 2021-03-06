var env = require('../../../spec/environment.js');

exports.config = {
  seleniumAddress: env.seleniumAddress,
  framework: 'jasmine',
  specs: ['fail_spec.js'],
  baseUrl: env.baseUrl,
  plugins: [{
    path: '../index.js',
    failOnWarning: true,
    failOnError: true
  }]
};
