import React from 'react';

// ============================================================================================================
// ===
// === CheckLabel :: Shows a "Check" (label and green or red icon)
// ===
// ============================================================================================================
// class-notation needed for test:
//export class CheckLabel extends React.Component {
//  render() {
//    const {label, checked} = this.props;
//    return <div className={ checked ? 'CheckLabel-checked' : 'CheckLabel-unchecked'}>{label}</div>;
//  }
//}

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
  return <button disabled={!enabled} onClick={enabled ? onClickHandler : null}>
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

export function MessageDialog({message, buttonTitle, onOkHandler}) {
  return <div>{message}
    <ButtonBar>
      <Button label={buttonTitle} onClickHandler={onOkHandler}/>
    </ButtonBar>
  </div>;
}
MessageDialog.propTypes = {
  message:     React.PropTypes.string.isRequired,
  buttonTitle: React.PropTypes.string.isRequired,
  onOkHandler: React.PropTypes.func.isRequired
};

// ============================================================================================================
// ===
// === NavigationBar :: Displays a simple Navigation Bar with given items
// ===
// ============================================================================================================
export function NavigationBar({activeViewId, onClickHandler, items}) {
  return <ul className='NavigationBar'>
    {items.map((item) => <li key={item.viewId}
                             onClick={() => onClickHandler(item.viewId)}
                             className={item.viewId === activeViewId ? 'NavigationBar-Item NavigationBar-Item-Active' : 'NavigationBar-Item'}>{item.label}</li>)}
  </ul>;
}
NavigationBar.propTypes = {
  activeViewId:   React.PropTypes.string,
  onClickHandler: React.PropTypes.func.isRequired,
  items:          React.PropTypes.arrayOf(React.PropTypes.shape({
    viewId: React.PropTypes.string.isRequired,
    label:  React.PropTypes.string.isRequired
  }))
};