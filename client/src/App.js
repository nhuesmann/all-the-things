import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/Header/Header';
import HelloWorld from './components/HelloWorld/HelloWorld';
import NoMatch from './hoc/NoMatch/NoMatch';

import styles from './App.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <main className={styles.content}>
      <Switch>
        <Route exact path="/" component={HelloWorld} />
        <Route path="/test" component={NoMatch} />
      </Switch>
    </main>
  </div>
);

export default App;
