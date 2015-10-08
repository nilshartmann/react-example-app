// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import React from 'react';
import {MessageDialog} from './CoreComponents';
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
      return <MessageDialog
        title='Password set!'
        message={`Your new password: ${password}`}
        buttonTitle='Reset'
        onOkHandler={()=>this.setPassword(null)}
      />;
    } else {
      return <PasswordForm
        restrictions={restrictions}
        onPasswordSet={ (newPassword) => this.setPassword(newPassword) }
      />;
    }
  }
}