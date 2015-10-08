import React from 'react';
import {CheckLabelList, ButtonBar, Button} from './CoreComponents';

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
  restrictions:  React.PropTypes.array.isRequired,
  onPasswordSet: React.PropTypes.func.isRequired
};