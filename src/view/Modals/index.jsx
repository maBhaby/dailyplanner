import React from 'react';
import { observer } from 'mobx-react-lite';
import BaseModals from './Base';
import { UserData } from './Content';
import modal from '../../store/modal';

const Modals = observer(() => {
  const { showModal, currenModal, setCloseModal } = modal;

  if (!showModal) {
    return null;
  }

  const modalsType = {
    userData: UserData,
  };

  const CurrentModal = modalsType[currenModal];

  return (
    <BaseModals closeModal={setCloseModal} currenModal={currenModal}>
        <CurrentModal />
    </BaseModals>
  );
});

export default Modals;
