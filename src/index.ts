import prompt = require('prompt');
import { generate } from './utils/generate';
import { passwordStrength } from 'check-password-strength';
import handleError from 'node-cli-handle-error';
import { green } from 'chalk';

(async () => {
  const promptSchema = {
    properties: {
      passwordLength: {
        description:
          'Enter in a password length. Must be between 8 and 10. Recommend at least 10 for strongest password.',
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

  const response = await prompt.get(promptSchema);
  prompt.start();

  const password = generate(response);

  const str = passwordStrength(password).value;
  /* eslint-disable-next-line no-console */
  console.info(`Your password is ${green(password)}`);
})();
