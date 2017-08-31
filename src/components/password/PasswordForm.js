import React from "react";
import PropTypes from "prop-types";
import { CheckLabelList, ButtonBar, Button } from "./../CoreComponents";

export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setFocusToPasswordInput();
  }

  onClear() {
    this.setState({ password: "" }, () => this.setFocusToPasswordInput());
  }

  onPasswordInputChange(input) {
    this.setState({ password: input });
  }

  checkPassword(password) {
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
    const { password = "" } = this.state;
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

PasswordForm.propTypes = {
  restrictions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      validate: PropTypes.func.isRequired
    })
  ).isRequired,
  onPasswordSet: PropTypes.func.isRequired
};
