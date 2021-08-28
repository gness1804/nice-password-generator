"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
var generateRandomInt = function (n) { return Math.floor(Math.random() * n); };
exports.shuffle = function (str) {
    var arr = str.split('');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        var j = generateRandomInt(len);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr.join('');
};
