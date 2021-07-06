const { filterBy } = require('../filter-by');
const { data } = require('../__mock__/data.mock');

const dataAfterFilter = [
  {
    name: 'Name 2',
    people: [
      {
        name: 'Person 774',
        animals: [{ name: 'animal5' }],
      },
    ],
  },
  {
    name: 'Name 3',
    people: [
      {
        name: 'Person 631',
        animals: [{ name: 'animal55' }],
      },
    ],
  },
];

describe('filterBy', () => {
  it('should return valid filtered data', () => {
    const arr = filterBy(data, 'mal5');

    expect(arr).toEqual(dataAfterFilter);
  });
});
