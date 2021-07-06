const { deepCopy } = require('../utils');

/**
 * Get array with count of nested elements
 * @param {*[]} arr
 * @return {*[]}
 */

const getCount = arr => {
  const result = deepCopy(arr);

  const recursiveChange = data => {
    for (let i = 0; i < data.length; i += 1) {
      const current = data[i];
      const keys = Object.keys(current);

      if (keys.length > 1) {
        const key2Data = current[keys[1]];

        if (Array.isArray(key2Data)) {
          if (current.name) {
            current.name = `${current.name} [${key2Data.length}]`;
          }

          recursiveChange(key2Data);
        }
      }
    }

    return data;
  };

  return recursiveChange(result);
};

module.exports = { getCount };
