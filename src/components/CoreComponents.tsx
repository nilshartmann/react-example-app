import * as React from "react";

type CheckLabelProps = {
  label: string;
  checked: boolean;
};

export function CheckLabel({ label, checked }: CheckLabelProps) {
  return <div className={checked ? "CheckLabel-checked" : "CheckLabel-unchecked"}>{label}</div>;
}

// ============================================================================================================
// ===
// === CheckLabelList :: Renders a List of CheckLabels
// ===
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
