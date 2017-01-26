'use strict';

const chalk = require('chalk');
const log = console.log;
const timeFormat = 'MMMM Do YYYY, h:mm:ss a';

class Logger {
  success(message) {
    log(chalk.green(message));
  }

  error(error) {
    log(chalk.red(error));
    throw new Error(error);
  }

  info(message) {
    log(chalk.cyan(message));
  }

  warn(message) {
    log(chalk.yellow(message));
  }
}

module.exports = new Logger();
