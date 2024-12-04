import _ from 'lodash';

export default (values: { text: string }) => {
  const errors: { message?: string } = {};
  const re = /(\bA-Z\b)(\ba-z\b)/g;

  if (!values.text) {
    errors.message = 'Text field is missing!';
  } else if (re.test(values.text) === false) {
    errors.message = 'Text must contain a valid character';
  } else {
    _.omit(errors, 'message');
  }

  console.log('...errors:', errors);
  console.log('...message:', errors.message);

  return errors;
};
