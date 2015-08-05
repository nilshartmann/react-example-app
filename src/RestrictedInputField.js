import React from 'react';

export default class RestrictedInputField extends React.Component {
  static propTypes = {
    restrictions:  React.PropTypes.array.isRequired,
    onInputChange: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      validations: {}
    };
  }

  onInputChange(e) {
    const currentValue = e.target.value;
    const validations = {};
    let inputValid = true;

    this.props.restrictions.forEach((r) => {
      validations[r.id] = r.validate(currentValue);
      if (!validations[r.id]) {
        inputValid = false;
      }
    });

    this.setState({
      currentValue,
      validations
    });

    this.props.onInputChange({
      valid: inputValid,
      value: currentValue
    });
  }

  render() {
    return <div>
      <input autoFocus='true'
             type='password'
             value={this.state.currentValue}
             onChange={this.onInputChange}
             placeholder='Password'/>

      {this.props.restrictions.map((r) => {
        const classes = (this.state.validations[r.id] === true) ? 'validation-succeeded' : 'validation-failed';
        return <div className={classes} key={r.id}>{r.label}</div>;
      })}
    </div>;
  }

}
