const { deepCopy } = require('../deep-copy');

describe('deepCopy util', () => {
  it('shouldt change origin data', () => {
    const data = { a: { b: 'origin data' } };

    const copy = deepCopy(data);
    copy.a.b = 'changed data';

    expect(data).not.toMatchObject(copy);
  });
});
