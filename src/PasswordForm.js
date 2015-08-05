import React from 'react';
import RestrictedInputField from './RestrictedInputField';
import * as Restrictions from './Restrictions';

const restrictions = [
  Restrictions.AtLeastEightCharacters,
  Restrictions.UppercaseLetters,
  Restrictions.LowercaseLetters,
  Restrictions.Numbers,
  Restrictions.Punctuation
];

export default class PasswordForm extends React.Component {
  constructor() {
    super();
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
    this.onSetPassword = this.onSetPassword.bind(this);
    this.state = {};
  }

  onPasswordInputChange(input) {
    const newState = {
      value: input.valid ? input.value : null
    };

    this.setState(newState);
  }

  onSetPassword() {
    this.setState({message: 'Your highly secret password has been set to: ' + this.state.value});
  }

  render() {
    const isValidPassword = this.state.value ? true : false;
    const buttonClasses = isValidPassword ? 'Button' : 'Button disabled';
    const message = this.state.message ? <div className='Message'>{this.state.message}</div> : null;

    return <div>
      <h1>Please choose a new password</h1>
      <RestrictedInputField restrictions={restrictions} onInputChange={this.onPasswordInputChange}/>

      <div className='ButtonBar'>
        <div className={buttonClasses} onClick={isValidPassword ? this.onSetPassword : null}>
          Set Password
        </div>
      </div>
      {message}
    </div>;
  }
}
