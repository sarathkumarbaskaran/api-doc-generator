'use strict';

const handlebars = require('handlebars');
const fs = require('fs');
const logger = require('./logger');

module.exports = function registerHbsHelper(options) {
  equal();
  partial(options.directory_path);
  partialWithAttributes();
};

function equal() {
  handlebars.registerHelper('equal', function (val1, val2) {
    return val1 === val2;
  });
}

function partial(directory_path) {
  handlebars.registerHelper('partial', function (templateName) {
    var filePath = `${directory_path}/handlebars/${templateName}.hbs`;
    if (!fs.existsSync(filePath)) {
      logger.warn(`${templateName}.hbs is not found`);
      return;
    }

    var sourceFile = fs.readFileSync(filePath, 'utf-8');
    var introductionStream = handlebars.compile(sourceFile);
    introductionStream = introductionStream();
    return new handlebars.SafeString(introductionStream);
  });
}

function partialWithAttributes() {
  handlebars.registerHelper('partial-attributes', function (options) {
    var filePath = `handlebars/${options.hash.templateName}.hbs`;
    if (!fs.existsSync(filePath)) {
      logger.warn(`${options.hash.templateName}.hbs is not found`);
      return;
    }

    var sourceFile = fs.readFileSync(filePath, 'utf-8');
    var introductionStream = handlebars.compile(sourceFile);
    var attrs = {};
    for (var prop in options.hash) {
      attrs[prop] = options.hash[prop];
    }
    introductionStream = introductionStream(attrs);
    return new handlebars.SafeString(introductionStream);
  });
}