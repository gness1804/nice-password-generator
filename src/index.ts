import prompt = require('prompt');
import { generate } from './utils/generate';
import { passwordStrength } from 'check-password-strength';
import handleError from 'node-cli-handle-error';
import { green } from 'chalk';

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

  let retries = 3;
  // TODO: Refactor so that a strong password is generated each time https://github.com/gness1804/nice-password-generator/issues/1
  let password;
  while (retries > 0) {
    prompt.start();

    const response = await prompt.get(promptSchema);
    password = generate(response);
    const str = passwordStrength(password).value;
    if (str === 'Strong') {
      /* eslint-disable-next-line no-console */
      console.info(`Your password is: ${green(password)}`);
      return;
    } else {
      retries--;
    }
  }

  // failure case; reject.
  handleError(
    'You have hit the unlikely case of three consecutive weak passwords. Please run the script again.',
    {},
  );
})();
