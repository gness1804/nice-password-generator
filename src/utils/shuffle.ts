const generateRandomInt = (n: number): number => Math.floor(Math.random() * n);

export const shuffle = (str: string): string => {
  const arr = str.split('');
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    const j = generateRandomInt(len);

    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr.join('');
};
