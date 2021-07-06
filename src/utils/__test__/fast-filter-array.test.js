const { fastFilterArray } = require('../fast-filter-array');

describe('fastFilterArray util', () => {
  it('should return valid value', () => {
    const predicate = 3;
    const data = fastFilterArray([1, 2, 3, 4], value => value === predicate);

    expect(data).toEqual([predicate]);
  });
});
