"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
var shuffle = require('../utils/shuffle').shuffle;
var alert2 = require('cli-alerts');
describe('shuffle', function () {
    it('should spit out a string of the same length as the input string', function () {
        var input = 'abcde';
        var res = shuffle(input);
        expect(res.length).toEqual(input.length);
        alert2({
            type: 'success',
            msg: "The output string is " + res,
        });
    });
});
