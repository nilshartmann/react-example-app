import React from 'react';

// ============================================================================================================
// ===
// === CheckLabel :: Shows a "Check" (label and green or red icon)
// ===
// ============================================================================================================
function CheckLabel({label, checked}) {
  return <div className={checked?'CheckLabel-checked':'CheckLabel-unchecked'}>{label}</div>;
}
CheckLabel.propTypes = {
  label:   React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool.isRequired
};

// ============================================================================================================
// ===
// === CheckLabelList :: Renders a List of CheckLabels
// ===
// === param checks: Array containing objects with label and checked property
// ============================================================================================================
function CheckLabelList({checks}) {
  return <div>
    {checks.map((c) => <CheckLabel key={c.label}
                                   label={c.label}
                                   checked={c.checked}/>
    )}
  </div>;
}
CheckLabelList.propTypes = {
  checks: React.PropTypes.array.isRequired
};

// ============================================================================================================
// ===
// === RestrictedInputField :: A text input field that ensures user defined constraints
// ===
// ============================================================================================================
export default class RestrictedInputField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checks: this.checkValue()
    };
  }

  checkValue(value) {
    const { restrictions } = this.props;

    // check each restriction
    const checks = restrictions.map((r) => ({
      label:   r.label,
      checked: !!value && r.validate(value)
    }));

    return checks;
  }

  onInputChange(newValue) {
    const checks = this.checkValue(newValue);
    const allChecksPassed = checks.every( (check) => check.checked);

    this.setState({
      currentValue: newValue,
      checks:       checks
    });

    this.props.onInputChange({
      valid: allChecksPassed,
      value: newValue
    });
  }

  render() {
    const { currentValue, checks } = this.state;
    const { description } = this.props;

    return <div>
      <input autoFocus='true'
             type='password'
             value={currentValue}
             onChange={(e)=>this.onInputChange(e.target.value)}
             placeholder={description} />
      <CheckLabelList checks={checks}/>
    </div>;
  }
}

RestrictedInputField.propTypes = {
  description: React.PropTypes.string,
  restrictions:  React.PropTypes.array.isRequired,
  onInputChange: React.PropTypes.func.isRequired
};

RestrictedInputField.defaultProps = {
  description: 'Password'
};
