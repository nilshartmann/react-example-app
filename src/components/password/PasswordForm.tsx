import * as React from "react";
import { Restriction } from "../../model/Restrictions";
import { CheckLabelList, ButtonBar, Button } from "./../CoreComponents";

type PasswordFormProps = {
  restrictions: Restriction[];
  onPasswordSet: (password: string) => void;
};

type PasswordFormState = {
  password: string;
};

export default class PasswordForm extends React.Component<PasswordFormProps, PasswordFormState> {
  passwordInputField?: HTMLInputElement | null;

  constructor() {
    super();
    this.state = {
      password: ""
    };
  }

  componentDidMount() {
    this.setFocusToPasswordInput();
  }

  onClear() {
    this.setState({ password: "" }, () => this.setFocusToPasswordInput());
  }

  onPasswordInputChange(input: string) {
    this.setState({ password: input });
  }

  checkPassword(password: string) {
    const { restrictions } = this.props;

    // check each restriction
    const checks = restrictions.map(r => ({
      label: r.label,
      checked: r.validate(password)
    }));

    return checks;
  }

  setFocusToPasswordInput() {
    this.passwordInputField && this.passwordInputField.focus();
  }

  render() {
    const { password } = this.state;
    const { onPasswordSet } = this.props;
    const checks = this.checkPassword(password);
    const failedChecks = checks.reduce((count, check) => (check.checked ? count : count + 1), 0);
    const isValidPassword = failedChecks === 0;

    return (
      <div>
        <input
          ref={passwordInputField => (this.passwordInputField = passwordInputField)}
          type="text"
          value={password}
          onChange={event => this.onPasswordInputChange(event.target.value)}
          placeholder="Password"
        />
        <CheckLabelList checks={checks} />
        {failedChecks > 0 ? (
          <div className="Label">{failedChecks} checks failed</div>
        ) : (
          <div className="Label Label-success">All checks passed!</div>
        )}

        <ButtonBar>
          <Button label="Clear" small={true} enabled={password.length > 0} onClickHandler={() => this.onClear()} />
          <Button label="Set Password" enabled={isValidPassword} onClickHandler={() => onPasswordSet(password)} />
        </ButtonBar>
      </div>
    );
  }
}
