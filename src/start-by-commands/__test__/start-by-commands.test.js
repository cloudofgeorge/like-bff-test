const { startByCommands } = require('../start-by-commands');

describe('startByCommands', () => {
  it('should return valid value', () => {
    console.log = jest.fn();
    startByCommands('filter', () => 'Hi');

    expect(console.log).toHaveBeenCalledWith('"Hi"');
  });

  it('shouldt return if callback is undefined', () => {
    console.log = jest.fn();
    startByCommands('filter');

    expect(console.log).toHaveBeenCalledTimes(0);
  });
});
