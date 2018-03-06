import React from 'react';

import Button from '../Button/Button';

const Cat = () => (
  <Button className="primary" onClick={() => alert('meow!')}>
    meow!
  </Button>
);

export default Cat;
