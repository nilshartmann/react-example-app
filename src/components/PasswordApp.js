// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react';
import {ConfirmDialog} from './CoreComponents';
import PasswordForm from './PasswordForm';

import * as Restrictions from '../model/Restrictions';

const restrictions = [
  Restrictions.AtLeastEightCharacters,
  Restrictions.UppercaseLetters,
  Restrictions.LowercaseLetters,
  Restrictions.Numbers,
  Restrictions.Punctuation
];

export default class PasswordApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setPassword(newPassword) {
    this.setState({password: newPassword});
  }

  render() {
    const { password } = this.state;

    if (password) {
      return <div><ConfirmDialog question={`Your password has been set to ${password}. Are you satisfied with that?`}  /></div>;
    } else {
      return <PasswordForm restrictions={restrictions} onPasswordSet={ (newPassword) => this.setPassword(newPassword) } />;
    }
  }
}