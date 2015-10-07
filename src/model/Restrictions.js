const NotEmpty = {
  id:       'not-empty',
  label:    'Enter at least one character',
  validate: (value) => {
    return value.length > 0;
  }
};

const AtLeastEightCharacters = {
  id:       'at-least-eight-chars',
  label:    'At least 8 characters long.',
  validate: (value) => {
    return value.length >= 8;
  }
};

const UppercaseLetters = {
  id:       'uppercase-letters',
  label:    'Contains uppercase letters.',
  validate: (value) => {
    return value.match(/[A-Z]/) != null;
  }
};

const LowercaseLetters = {
  id:       'lowercase-letters',
  label:    'Contains lowercase letters.',
  validate: (value) => {
    return value.match(/[a-z]/) != null;
  }
};

const Numbers = {
  id:       'numbers',
  label:    'Contains numbers.',
  validate: (value) => {
    return value.match(/\d/) != null;
  }
};

const Punctuation = {
  id:       'punctuation',
  label:    'Contains punctuation.',
  validate: (value) => {
    return value.match(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/) != null;
  }
};

export default {
  NotEmpty, //

  Numbers, //
  AtLeastEightCharacters,
  UppercaseLetters,
  LowercaseLetters,
  Punctuation
};
