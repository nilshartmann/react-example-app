// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

import * as React from "react";
import { MessageDialog } from "./../CoreComponents";
import PasswordForm from "./PasswordForm";

import Restrictions from "../../model/Restrictions";

const restrictions = [
  Restrictions.AtLeastEightCharacters,
  Restrictions.UppercaseLetters,
  Restrictions.LowercaseLetters,
  Restrictions.Numbers,
  Restrictions.Punctuation
];

type PasswordViewState = {
  password?: string | null;
};

export default class PasswordView extends React.Component<{}, PasswordViewState> {
  constructor() {
    super();
    this.state = {};
  }

  setPassword(newPassword: string | null) {
    this.setState({ password: newPassword });
  }

  render() {
    const { password } = this.state;

    if (!password) {
      return (
        <div>
          <h1>Step 1: Choose new password</h1>
          <PasswordForm restrictions={restrictions} onPasswordSet={(newPassword: string) => this.setPassword(newPassword)} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Step 2: Confirm password</h1>
          <MessageDialog
            message={`Your new password: ${password}`}
            buttonTitle="Reset"
            onOkHandler={() => this.setPassword(null)}
          />
        </div>
      );
    }
  }
}
