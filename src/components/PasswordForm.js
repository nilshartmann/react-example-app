import React from 'react';
import {CheckLabelList, Button} from './CoreComponents';

export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkPassword(password) {
    const { restrictions } = this.props;

    // check each restriction
    const checks = restrictions.map((r) => ({
      label:   r.label,
      checked: !!password && r.validate(password)
    }));

    return checks;
  }

  onPasswordInputChange(input) {
    this.setState({password: input});
  }

  onSetPassword() {
    const { password } = this.state;
    this.setState({message: `Your highly secret password has been set to: ${password}`});
  }

  render() {
    const { password, message } = this.state;
    const checks = this.checkPassword(password);
    const isValidPassword = checks.every((check) => check.checked);
    const messageLabel = message ? <div className='Message'>{message}</div> : null;

    return <div>
      <h1>Please choose a new password</h1>
      <input autoFocus='true'
             type='password'
             value={password}
             onChange={(event) => this.onPasswordInputChange(event.target.value)}
             placeholder='Password'/>
      <CheckLabelList checks={checks}/>
      <Button label='Set Password' enabled={isValidPassword} onClickHandler={() => this.onSetPassword()} />
      {messageLabel}
    </div>;
  }
}

PasswordForm.propTypes = {
  restrictions: React.PropTypes.array.isRequired
};
