/* eslint-disable @typescript-eslint/no-var-requires */
const { shuffle } = require('../utils/shuffle');
const alert2 = require('cli-alerts');

describe('shuffle', () => {
  it('should spit out a string of the same length as the input string', () => {
    const input = 'abcde';
    const res = shuffle(input);
    expect(res.length).toEqual(input.length);
    alert2({
      type: 'success',
      msg: `The output string is ${res}`,
    });
  });
});
