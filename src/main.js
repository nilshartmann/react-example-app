require('./styles/styles.css');

import React from 'react';
import ReactDom from 'react-dom';
import PasswordForm from './PasswordForm';

const component = <PasswordForm />;

ReactDom.render(component, document.getElementById('mount'));

