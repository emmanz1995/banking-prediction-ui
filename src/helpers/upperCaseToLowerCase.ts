const convertToUpperCase = (text: string) => {
  if (Number(text)) return '';

  let sentence = text.toLowerCase().split(' ');

  for (let i = 0; sentence.length > i; i++) {
    sentence[i] = sentence[i].charAt(0).toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(' ');
};

export default convertToUpperCase;
