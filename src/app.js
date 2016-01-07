import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PasswordForm from './components/PasswordForm';
import Restrictions from './model/Restrictions';

const restrictions = [
  Restrictions.AtLeastEightCharacters,
  Restrictions.UppercaseLetters,
  Restrictions.LowercaseLetters,
  Restrictions.Numbers,
  Restrictions.Punctuation
];

const passwordForm = <PasswordForm
  restrictions={restrictions}
/>;

ReactDOM.render(passwordForm, document.getElementById('mount'));
