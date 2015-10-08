import React from 'react';

// ============================================================================================================
// ===
// === CheckLabel :: Shows a "Check" (label and green or red icon)
// ===
// ============================================================================================================
export function CheckLabel({label, checked}) {
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
export function CheckLabelList({checks}) {
  return <div className='CheckLabelList'>
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
// === Button :: Displays a Button that can be enabled or disabled
// ===
// ============================================================================================================
export function Button({label, enabled, onClickHandler}) {
  return <button className={enabled?null:'disabled'} onClick={enabled ? onClickHandler : null}>
    {label}
  </button>
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
// TODO: children proptypes

export function ConfirmDialog({question, onYesHandler, onNoHandler}) {
  return <div><h1>Please confirm</h1>{question}
    <ButtonBar>
      <Button label='Yes' onClickHandler={onYesHandler}/>
      <Button label='No' onClickHandler={onNoHandler}/>
    </ButtonBar>
  </div>;
}
ConfirmDialog.propTypes = {
  question: React.PropTypes.string.isRequired,
  onYesHandler: React.PropTypes.func.isRequired,
  onNoHandler: React.PropTypes.func.isRequired
};