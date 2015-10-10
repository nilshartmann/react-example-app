import React from 'react';

// ============================================================================================================
// ===
// === CheckLabel :: Shows a "Check" (label and green or red icon)
// ===
// ============================================================================================================
export function CheckLabel({label, checked}) {
  return <div className={ checked ? 'CheckLabel-checked' : 'CheckLabel-unchecked'}>{label}</div>;
}
CheckLabel.propTypes = {
  label:   React.PropTypes.string.isRequired,
  checked: React.PropTypes.bool
};

// ============================================================================================================
// ===
// === CheckLabelList :: Renders a List of CheckLabels
// ===
// === param checks: Array containing objects with label and checked property
// ============================================================================================================
export function CheckLabelList({checks}) {
  return <div className='CheckLabelList'>
    {checks.map((c) => <CheckLabel key={c.label}
                                   label={c.label}
                                   checked={c.checked}/>
    )}
  </div>;
}
CheckLabelList.propTypes = {
  checks: React.PropTypes.arrayOf(React.PropTypes.shape({
    label:   React.PropTypes.string.isRequired,
    checked: React.PropTypes.bool
  })).isRequired
};

// ============================================================================================================
// ===
// === Button :: Displays a Button that can be enabled or disabled
// ===
// ============================================================================================================
export function Button({label, enabled, onClickHandler}) {
  return <button className={enabled ? null : 'disabled'} onClick={enabled ? onClickHandler : null}>
    {label}
  </button>;
}
Button.propTypes = {
  label:          React.PropTypes.string.isRequired,
  enabled:        React.PropTypes.bool,
  onClickHandler: React.PropTypes.func
};

Button.defaultProps = {
  enabled: true
};

export function ButtonBar({children}) {
  return <div className='ButtonBar'>{children}</div>;
}

export function MessageDialog({title, message, buttonTitle, onOkHandler}) {
  return <div><h1>{title}</h1>{message}
    <ButtonBar>
      <Button label={buttonTitle} onClickHandler={onOkHandler}/>
    </ButtonBar>
  </div>;
}
MessageDialog.propTypes = {
  title:       React.PropTypes.string.isRequired,
  message:     React.PropTypes.string.isRequired,
  buttonTitle: React.PropTypes.string.isRequired,
  onOkHandler: React.PropTypes.func.isRequired
};