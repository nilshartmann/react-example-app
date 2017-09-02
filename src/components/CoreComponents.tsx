import * as React from "react";

// import PropTypes from "prop-types";

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

type CheckLabelProps = {
  label: string;
  checked: boolean;
};

export function CheckLabel({ label, checked }: CheckLabelProps) {
  return <div className={checked ? "CheckLabel-checked" : "CheckLabel-unchecked"}>{label}</div>;
}

// CheckLabel.propTypes = {
//   label: PropTypes.string.isRequired,
//   checked: PropTypes.bool
// };

// ============================================================================================================
// ===
// === CheckLabelList :: Renders a List of CheckLabels
// ===
// === param checks: Array containing objects with label and checked property
// ============================================================================================================
type Check = {
  label: string;
  checked: boolean;
};
type CheckLabelListProps = {
  checks: Check[];
};
export function CheckLabelList({ checks }: CheckLabelListProps) {
  return (
    <div className="CheckLabelList">{checks.map(c => <CheckLabel key={c.label} label={c.label} checked={c.checked} />)}</div>
  );
}
// CheckLabelList.propTypes = {
//   checks: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       checked: PropTypes.bool
//     })
//   ).isRequired
// };

// ============================================================================================================
// ===
// === Button :: Displays a Button that can be enabled or disabled
// ===
// ============================================================================================================
type ButtonProps = {
  label: string;
  enabled?: boolean;
  onClickHandler?: () => void;
  small?: boolean;
};
export function Button({ label, enabled = true, small = false, onClickHandler }: ButtonProps) {
  const className = small ? "small" : "";
  return (
    <button disabled={!enabled} className={className} onClick={enabled ? onClickHandler : undefined}>
      {label}
    </button>
  );
}
// Button.propTypes = {
//   label: PropTypes.string.isRequired,
//   enabled: PropTypes.bool,
//   small: PropTypes.bool,
//   onClickHandler: PropTypes.func
// };

// Button.defaultProps = {
//   enabled: true
// };

type ButtonBarProps = {
  children: React.ReactNode;
};
export function ButtonBar({ children }: ButtonBarProps) {
  return <div className="ButtonBar">{children}</div>;
}

type MessageDialogProps = {
  message: string;
  buttonTitle: string;
  onOkHandler: () => void;
};
export function MessageDialog({ message, buttonTitle, onOkHandler }: MessageDialogProps) {
  return (
    <div>
      {message}
      <ButtonBar>
        <Button label={buttonTitle} onClickHandler={onOkHandler} />
      </ButtonBar>
    </div>
  );
}
// MessageDialog.propTypes = {
//   message: PropTypes.string.isRequired,
//   buttonTitle: PropTypes.string.isRequired,
//   onOkHandler: PropTypes.func.isRequired
// };
