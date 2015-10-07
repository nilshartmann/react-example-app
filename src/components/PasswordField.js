import React from 'react';
import {CheckLabelList} from './CoreComponents';

// ============================================================================================================
// ===
// === PasswordField ::
// ===
// ============================================================================================================
export default function PasswordField({ password, checks, onInputChange }) {
  return <div>
    <input autoFocus='true'
           type='password'
           value={password}
           onChange={(e)=>onInputChange(e.target.value)}
           placeholder='Password'/>
    <CheckLabelList checks={checks}/>
  </div>;
}

PasswordField.propTypes = {
  password:      React.PropTypes.string,
  checks:        React.PropTypes.array.isRequired,
  onInputChange: React.PropTypes.func.isRequired
};
