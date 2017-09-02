export type Restriction = {
  label: string;
  validate: (value: string) => boolean;
};

const NotEmpty: Restriction = {
  label: "Enter at least one character",
  validate: value => {
    return !!value && value.length > 0;
  }
};

const AtLeastEightCharacters: Restriction = {
  label: "At least 8 characters long.",
  validate: value => {
    return !!value && value.length >= 8;
  }
};

const UppercaseLetters: Restriction = {
  label: "Contains uppercase letters.",
  validate: value => {
    return !!value && value.match(/[A-Z]/) !== null;
  }
};

const LowercaseLetters: Restriction = {
  label: "Contains lowercase letters.",
  validate: value => {
    return !!value && value.match(/[a-z]/) !== null;
  }
};

const Numbers: Restriction = {
  label: "Contains numbers.",
  validate: value => {
    return !!value && value.match(/\d/) !== null;
  }
};

const Punctuation: Restriction = {
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
