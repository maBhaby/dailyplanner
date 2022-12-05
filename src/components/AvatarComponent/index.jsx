import React, { useEffect, useState } from 'react';
import { auth } from '../../db/firebase';
import { getDataUser } from '../../db/serializer';
import modal from '../../store/modal';
import { MODAL_TYPE } from '../../utils/const';

import AvatarView from '../../view/AvatarView';

const AvatarComponent = () => {
  const [accountData, setAccountData] = useState(null);

  const openModal = () => {
    modal.setShowModal(MODAL_TYPE.USER_DATA)
    console.log(modal.showModal)
  }

  useEffect(() => {
    setAccountData(getDataUser(auth.currentUser));
  }, [auth]);

  return <AvatarView openModal={openModal} {...accountData} />;
}

export default AvatarComponent;
