#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
const _prompt = require('prompt');
const { generate } = require('./utils/generate');
const handleError = require('cli-handle-error');
const _alert = require('cli-alerts');

(async () => {
  try {
    const promptSchema = {
      properties: {
        passwordLength: {
          description: 'Enter in a password length. Must be between 10 and 16.',
          type: 'number',
          default: 12,
          conform(val: number) {
            // check if val is in fact an integer
            if (Math.floor(val) !== val || Math.ceil(val) !== val) return false;
            if (val > 9 && val < 17) return true;
            return false;
          },
          message: 'Length must be an integer between 10 and 16.',
        },
      },
    };

    const response = await _prompt.get(promptSchema);
    _prompt.start();

    const password = generate(response);

    _alert({
      type: 'success',
      msg: `Your password is ${password}`,
    });
  } catch (error) {
    handleError('Error generating password', error);
  }
})();
