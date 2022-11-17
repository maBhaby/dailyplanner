import React, { useEffect, useState } from 'react';
import { auth } from '../../db/firebase';
import { getDataUser } from '../../db/serializer';
import AvatarView from '../../view/AvatarView';

const AvatarComponent = () => {
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    setAccountData(getDataUser(auth.currentUser));
  }, []);

  return <AvatarView accountData={accountData} />;
};

export default AvatarComponent;
