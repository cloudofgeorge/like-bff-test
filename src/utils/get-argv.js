/**
 * Get Argv from command line
 * @return {Object}
 */

const getArgv = () => {
  const arr = process.argv;
  let data = {
    data: [],
    commands: {},
  };

  if (arr) {
    // start from index 2
    for (let index = 0; index < arr.length; index += 1) {
      const current = arr[index];

      // get all commands starts from --
      if (current && current.length > 2 && `${current[0]}${current[0]}` === '--') {
        const preparedCommand = current.split(/(?:--|=)+/);

        preparedCommand.shift();

        data.commands = {
          ...data.commands,
          [preparedCommand[0]]: preparedCommand[1] || null,
        };
      } else {
        data.data.push(current);
      }
    }
  }

  return data;
};

module.exports = { getArgv };
