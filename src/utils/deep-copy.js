/**
 * Deep Copy
 * @param {*} data
 * @return {*} copy of @param data
 */

const deepCopy = data => JSON.parse(JSON.stringify(data));

module.exports = { deepCopy };
