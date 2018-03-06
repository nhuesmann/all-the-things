/* eslint react/prop-types: 0 */

import React from 'react';

import joinClassNames from '../../utility/joinClassNames';
import styles from './Button.scss';

const Button = ({ className, children, ...props }) => (
  <button
    type="button"
    className={joinClassNames(styles, 'btn', className)}
    {...props}
  >
    {children}
  </button>
);

export default Button;
