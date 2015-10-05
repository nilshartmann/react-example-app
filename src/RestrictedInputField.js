import React from 'react';

function RestrictionList({value, restrictions}) {
  return <div>
    {restrictions.map((r) => <RestrictionLabel key={r.id}
                                               label={r.label}
                                               succeeded={value && r.validate(value)}/>
    )}
  </div>;
}
RestrictionList.propTypes = {
  value:        React.PropTypes.string,
  restrictions: React.PropTypes.array.isRequired
};

function RestrictionLabel({label, succeeded}) {
  return <div className={succeeded?'validation-succeeded':'validation-failed'}>{label}</div>;
}
RestrictionLabel.propTypes = {
  label:     React.PropTypes.string.isRequired,
  succeeded: React.PropTypes.bool
};

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
    const { restrictions } = this.props;

    const inputValid = !restrictions.some((r)=>!r.validate(currentValue));

    this.setState({
      currentValue
    });

    this.props.onInputChange({
      valid: inputValid,
      value: currentValue
    });
  }

  render() {
    const { currentValue } = this.state;
    const { restrictions } = this.props;
    return <div>
      <input autoFocus='true'
             type='password'
             value={currentValue}
             onChange={this.onInputChange}
             placeholder='Password'/>
      <RestrictionList value={currentValue} restrictions={restrictions}/>
    </div>;
  }

}
