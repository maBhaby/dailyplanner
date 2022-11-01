import React from 'react';
import { user } from '../../db/firebase';

const AvatarComponent = () => {
  if (user) {
    console.log(user);
  }

  return <button>{user}</button>;
};

export default AvatarComponent;
