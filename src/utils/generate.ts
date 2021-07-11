/* eslint-disable @typescript-eslint/no-var-requires */

const { shuffle } = require('../utils/shuffle');

interface UserRes {
  passwordLength: number;
}

export const generate = ({ passwordLength }: UserRes): string => {
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

  const shuffledPassword = shuffle(password);

  return shuffledPassword;
};
