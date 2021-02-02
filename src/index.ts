const generateRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

const charCodeRanges = {
  num: [48, 57],
};

const { num } = charCodeRanges;

const randomNumStr = String.fromCharCode(generateRandomInt(num[0], num[1]));
