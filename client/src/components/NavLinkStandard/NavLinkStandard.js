import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './NavLinkStandard.scss';

const NavLinkStandard = props => (
  <NavLink
    exact={props.exact}
    to={props.path}
    className={styles.link}
    activeClassName={styles.linkActive}
  >
    {props.label}
  </NavLink>
);

NavLinkStandard.defaultProps = {
  exact: false,
};

NavLinkStandard.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavLinkStandard;
