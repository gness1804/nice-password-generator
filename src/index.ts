let passwordLength = 12; // TODO: make dynamic based on user input

const generateRandomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

const specialChars = ['@', '!', '#', '?', '~', '>', '=', '+', '%', '&'];

const charCodeRanges = {
  num: [48, 57],
  upperAlpha: [65, 90],
  lowerAlpha: [97, 122],
};

const { num, upperAlpha, lowerAlpha } = charCodeRanges;

const generateRandomNum = (): string =>
  String.fromCharCode(generateRandomInt(num[0], num[1]));
const generateRandomUpperAlpha = (): string =>
  String.fromCharCode(generateRandomInt(upperAlpha[0], upperAlpha[1]));
const generateRandomLowerAlpha = (): string =>
  String.fromCharCode(generateRandomInt(lowerAlpha[0], lowerAlpha[1]));

const generateRandomSpecialChar = (): string => {
  const randomIndex = generateRandomInt(0, specialChars.length - 1);
  return specialChars[randomIndex];
};

let password = '';

while (passwordLength > 0) {
  const masterNum = generateRandomInt(0, 4);
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
console.info(`Your password is: ${password}.`);
