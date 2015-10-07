import './styles/styles.css';

import React from 'react';
import ReactDom from 'react-dom';
import PasswordForm from './components/PasswordForm';

import * as Restrictions from './model/Restrictions';

const restrictions = [
  Restrictions.AtLeastEightCharacters,
  Restrictions.UppercaseLetters,
  Restrictions.LowercaseLetters,
  Restrictions.Numbers,
  Restrictions.Punctuation
];

ReactDom.render(<PasswordForm restrictions={restrictions} />, document.getElementById('mount'));

