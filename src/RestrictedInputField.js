import React from 'react';

function RestrictionLabel({label, succeeded}) {
  return <div className={succeeded?'validation-succeeded':'validation-failed'}>{label}</div>;
}

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
    const { validations, currentValue } = this.state;
    const { restrictions } = this.props;
    return <div>
      <input autoFocus='true'
             type='password'
             value={currentValue}
             onChange={this.onInputChange}
             placeholder='Password'/>
      {restrictions.map((r) => <RestrictionLabel key={r.id} label={r.label} succeeded={validations[r.id] === true}/>)}
    </div>;
  }

}
