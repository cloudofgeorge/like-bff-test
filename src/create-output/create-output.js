/**
 * Class create output
 */

class CreateOutput {
  /**
   * Return prepared data in JSON string
   * @param {*} [value] any data for prepare
   * @return {string}
   */
  getPreparedData(value) {
    return JSON.stringify(value, null, 4);
  }

  /**
   * Printing/show data
   * @param {*} [value] any data printing (now is console.log)
   */
  print(value) {
    const data = this.getPreparedData(value);

    console.log(data);
  }
}

const createOutput = new CreateOutput();

module.exports = { createOutput };
