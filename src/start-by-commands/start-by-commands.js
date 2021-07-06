const { getArgv } = require('../utils');
const { createOutput } = require('../create-output');

/**
 * Start By Commands
 * @param {string} [commandName] - Command name from process
 * @param {function} [callback] - callback for command
 */

const startByCommands = (commandName, callback) => {
  const argv = getArgv();

  if (callback) {
    const command = argv.commands[commandName];

    if (command || commandName in argv.commands) {
      const result = callback(command);

      if (result) {
        createOutput.print(result);
      }
    }
  }
};

module.exports = { startByCommands };
