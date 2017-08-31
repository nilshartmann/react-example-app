const NotEmpty = {
  label: "Enter at least one character",
  validate: value => {
    return !!value && value.length > 0;
  }
};

const AtLeastEightCharacters = {
  label: "At least 8 characters long.",
  validate: value => {
    return !!value && value.length >= 8;
  }
};

const UppercaseLetters = {
  label: "Contains uppercase letters.",
  validate: value => {
    return !!value && value.match(/[A-Z]/) !== null;
  }
};

const LowercaseLetters = {
  label: "Contains lowercase letters.",
  validate: value => {
    return !!value && value.match(/[a-z]/) !== null;
  }
};

const Numbers = {
  label: "Contains numbers.",
  validate: value => {
    return !!value && value.match(/\d/) !== null;
  }
};

const Punctuation = {
  label: "Contains punctuation.",
  validate: value => {
    return !!value && value.match(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/) !== null;
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
