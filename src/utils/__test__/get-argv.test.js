const { getArgv } = require('../get-argv');

describe('getArgv util', () => {
  it('should return valid value', () => {
    const data = getArgv();

    expect(data).toMatchObject({
      data: ['node', 'jest', 'arg2'],
      commands: { filter: 'test' },
    });
  });

  it('should return object with empty values if we doesnt have commands', () => {
    process.argv = jest.fn(() => undefined);

    const data = getArgv();

    expect(data).toMatchObject({
      data: [],
      commands: {},
    });
  });
});
