import React from 'react';

import Button from '../Button/Button';

const Dog = () => (
  <Button className="danger" onClick={() => alert('woof!')}>
    woof!
  </Button>
);

export default Dog;
