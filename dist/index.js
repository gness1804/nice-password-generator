"use strict";
var passwordLength = 12; // TODO: make dynamic based on user input
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
while (passwordLength > 0) {
    var masterNum = generateRandomInt(0, 4);
    switch (masterNum) {
        case 0:
            password += generateRandomNum();
            break;
        case 1:
            password += generateRandomUpperAlpha();
            break;
        case 2:
            password += generateRandomLowerAlpha();
            break;
        case 3:
            password += generateRandomSpecialChar();
            break;
        default:
            password += generateRandomNum();
    }
    passwordLength--;
}
/* eslint-disable-next-line no-console */
console.info("Your password is: " + password + ".");
