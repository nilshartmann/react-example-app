import './styles/styles.css';

import React from 'react';
import ReactDom from 'react-dom';
import PasswordApp from './components/PasswordApp';
//import PasswordForm from './components/PasswordForm';

//import * as Restrictions from './model/Restrictions';
//
//const restrictions = [
//  Restrictions.AtLeastEightCharacters,
//  Restrictions.UppercaseLetters,
//  Restrictions.LowercaseLetters,
//  Restrictions.Numbers,
//  Restrictions.Punctuation
//];
//
//const form = <PasswordForm restrictions={restrictions} />;


ReactDom.render(<PasswordApp />, document.getElementById('mount'));

