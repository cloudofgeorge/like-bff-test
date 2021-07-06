const { fastFilterArray } = require('../utils');

/**
 * Get filtered data by prepared array
 * @param {*[]} arr
 * @param {string} predicate
 * @return {*[]}
 */

const filterBy = (arr, predicate) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const currentI = arr[i];

    for (let j = 0; j < currentI.people.length; j += 1) {
      const currentJ = currentI.people[j];
      const filtered = fastFilterArray(currentJ.animals, value =>
        value.name.toLowerCase().includes(predicate)
      );

      if (filtered.length) {
        const obj = {
          name: currentI.name,
          people: [{ name: currentJ.name, animals: filtered }],
        };

        result.push(obj);
      }
    }
  }

  return result;
};

module.exports = { filterBy };
