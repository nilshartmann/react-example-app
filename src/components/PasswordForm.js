import React from 'react';
import {CheckLabelList, ButtonBar, Button} from './CoreComponents';

export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPasswordInputChange(input) {
    this.setState({password: input});
  }

  checkPassword(password) {
    const { restrictions } = this.props;

    // check each restriction
    const checks = restrictions.map((r) => ({
      label:   r.label,
      checked: r.validate(password)
    }));

    return checks;
  }

  render() {
    const { password } = this.state;
    const { onPasswordSet } = this.props;
    const checks = this.checkPassword(password);
    const isValidPassword = checks.every((check) => check.checked);

    return <div>
      <h1>Please choose a new password</h1>
      <input autoFocus='true'
             type='password'
             value={password}
             onChange={(event) => this.onPasswordInputChange(event.target.value)}
             placeholder='Password'/>
      <CheckLabelList checks={checks}/>

      <ButtonBar>
        <Button label='Set Password' enabled={isValidPassword} onClickHandler={ () => onPasswordSet(password) }/>
      </ButtonBar>
    </div>;
  }
}

PasswordForm.propTypes = {
  restrictions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label:    React.PropTypes.string.isRequired,
      validate: React.PropTypes.func.isRequired
    })).isRequired,
  onPasswordSet: React.PropTypes.func.isRequired
};
