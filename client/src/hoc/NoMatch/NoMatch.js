/* eslint react/prop-types: 0 */

import React from 'react';

const NoMatch = ({ location }) => (
  <div>
    <h2>
      Oops! No match for <code>{location.pathname}</code>.
    </h2>
  </div>
);

export default NoMatch;
