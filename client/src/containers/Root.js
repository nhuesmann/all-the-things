/* eslint react/forbid-prop-types: "off" */

import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../components/App/App';

const Root = ({ store, routes }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.node.isRequired,
};

export default Root;
