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
  label: React.PropTypes.string.isRequired,
  enabled: React.PropTypes.bool,
  onClickHandler: React.PropTypes.func
};