/* eslint react/prop-types: 0 */

import React from 'react';

import styles from './Main.scss';

const Main = ({ routes }) => <main className={styles.main}>{routes}</main>;

export default Main;
