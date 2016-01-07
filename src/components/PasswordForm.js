import React from 'react';

export default class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPasswordInputChange(input) {
    this.setState({password: input});
  }

  render() {
    const { password } = this.state;

    return <div>
      <input ref='passwordInputField'
             type='password'
             value={password}
             onChange={(event) => this.onPasswordInputChange(event.target.value)}
             placeholder='Password'/>
    </div>;
  }
}

PasswordForm.propTypes = {
  restrictions: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label:    React.PropTypes.string.isRequired,
      validate: React.PropTypes.func.isRequired
    })).isRequired
};
