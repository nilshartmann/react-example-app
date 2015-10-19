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

    if (!password) {
      return <div>
        <h1>Step 1: Choose new password</h1>
        <PasswordForm
          restrictions={restrictions}
          onPasswordSet={ (newPassword) => this.setPassword(newPassword) }
        />
      </div>;
    } else {
      return <div>
        <h1>Step 2: Confirm password</h1>
        <MessageDialog
          message={`Your new password: ${password}`}
          buttonTitle='Reset'
          onOkHandler={ () => this.setPassword(null) }
        />
      </div>;
    }
  }
}