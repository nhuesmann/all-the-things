/* eslint react/prop-types: 0 */

import React from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';

import styles from './App.scss';

const App = ({ routes }) => (
  <div className={styles.app}>
    <Header />
    <Main routes={routes} />
  </div>
);

export default App;
