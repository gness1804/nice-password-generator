import prompt = require('prompt');
import { generate } from './utils/generate';

(async () => {
  const promptSchema = {
    properties: {
      passwordLength: {
        description: 'Enter in a password length.',
        type: 'number',
        default: 12,
        conform(val: number) {
          // check if val is in fact an integer
          if (Math.floor(val) !== val || Math.ceil(val) !== val) return false;
          if (val > 7 && val < 17) return true;
          return false;
        },
        message: 'Length must be an integer between 8 and 16.',
      },
      allowSpecialChars: {
        description: 'Do you want to allow special characters (i.e. "?", "@")?',
        type: 'boolean',
        default: true,
        message: 'You must enter either "true" (or "t") or "false" (or "f").',
      },
    },
  };

  prompt.start();

  const response = await prompt.get(promptSchema);

  // const { allowSpecialChars } = response;
  // let { passwordLength } = response;
  const password = generate(response);

  // const generateRandomInt = (min: number, max: number): number =>
  //   Math.floor(Math.random() * (max - min) + min);

  // const specialChars = ['@', '!', '#', '?', '~', '>', '=', '+', '%', '&'];

  // const charCodeRanges = {
  //   num: [48, 57],
  //   upperAlpha: [65, 90],
  //   lowerAlpha: [97, 122],
  // };

  // const { num, upperAlpha, lowerAlpha } = charCodeRanges;

  // const generateRandomNum = (): string =>
  //   String.fromCharCode(generateRandomInt(num[0], num[1]));

  // const generateRandomUpperAlpha = (): string =>
  //   String.fromCharCode(generateRandomInt(upperAlpha[0], upperAlpha[1]));

  // const generateRandomLowerAlpha = (): string =>
  //   String.fromCharCode(generateRandomInt(lowerAlpha[0], lowerAlpha[1]));

  // const generateRandomSpecialChar = (): string => {
  //   const randomIndex = generateRandomInt(0, specialChars.length - 1);
  //   return specialChars[randomIndex];
  // };

  // let password = '';

  // while (passwordLength > 0) {
  //   const masterNum = generateRandomInt(0, allowSpecialChars ? 4 : 3);
  //   switch (masterNum) {
  //     case 0:
  //       password += generateRandomNum();
  //       break;
  //     case 1:
  //       password += generateRandomUpperAlpha();
  //       break;
  //     case 2:
  //       password += generateRandomLowerAlpha();
  //       break;
  //     case 3:
  //       password += generateRandomSpecialChar();
  //       break;
  //     default:
  //       password += generateRandomNum();
  //   }
  //   passwordLength--;
  // }

  /* eslint-disable-next-line no-console */
  console.info(`Your password is: ${password}`);
})();
