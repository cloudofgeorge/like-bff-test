const { getCount } = require('../get-count');
const { data } = require('../__mock__/data.mock');

const dataAfterSetCount = [
  {
    name: 'Name 1 [2]',
    people: [
      {
        name: 'Person 1242 [2]',
        animals: [{ name: 'animal1' }, { name: 'animal2' }],
      },
      {
        name: 'Person 6546 [2]',
        animals: [{ name: 'animal1' }, { name: 'animal2' }],
      },
    ],
  },
  {
    name: 'Name 2 [1]',
    people: [
      {
        name: 'Person 774 [2]',
        animals: [{ name: 'animal1' }, { name: 'animal2' }],
      },
    ],
  },
];

describe('getCount', () => {
  it('should return valid value with count', () => {
    const arr = getCount(data);

    expect(arr).toEqual(dataAfterSetCount);
  });
});
