const { filterBy } = require('./src/filter-by');
const { startByCommands } = require('./src/start-by-commands');
const { getCount } = require('./src/get-count');

const { data } = require('./data');

startByCommands('filter', commandValue => filterBy(data, commandValue));

startByCommands('count', () => getCount(data));
