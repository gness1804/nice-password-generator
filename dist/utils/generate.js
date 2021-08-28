"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var shuffle = require('../utils/shuffle').shuffle;
exports.generate = function (_a) {
    var passwordLength = _a.passwordLength;
    var generateRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    var specialChars = ['@', '!', '#', '?', '~', '>', '=', '+', '%', '&'];
    var charCodeRanges = {
        num: [48, 57],
        upperAlpha: [65, 90],
        lowerAlpha: [97, 122],
    };
    var num = charCodeRanges.num, upperAlpha = charCodeRanges.upperAlpha, lowerAlpha = charCodeRanges.lowerAlpha;
    var generateRandomNum = function () {
        return String.fromCharCode(generateRandomInt(num[0], num[1]));
    };
    var generateRandomUpperAlpha = function () {
        return String.fromCharCode(generateRandomInt(upperAlpha[0], upperAlpha[1]));
    };
    var generateRandomLowerAlpha = function () {
        return String.fromCharCode(generateRandomInt(lowerAlpha[0], lowerAlpha[1]));
    };
    var generateRandomSpecialChar = function () {
        var randomIndex = generateRandomInt(0, specialChars.length - 1);
        return specialChars[randomIndex];
    };
    var password = '';
    while (password.length < passwordLength) {
        switch (password.length) {
            case 1:
            case 5:
            case 9:
            case 13:
                password += generateRandomNum();
                break;
            case 2:
            case 6:
            case 10:
            case 14:
                password += generateRandomUpperAlpha();
                break;
            case 3:
            case 7:
            case 11:
            case 15:
                password += generateRandomLowerAlpha();
                break;
            case 4:
            case 8:
            case 12:
            case 16:
                password += generateRandomSpecialChar();
                break;
            default:
                password += generateRandomNum();
        }
    }
    var shuffledPassword = shuffle(password);
    return shuffledPassword;
};
