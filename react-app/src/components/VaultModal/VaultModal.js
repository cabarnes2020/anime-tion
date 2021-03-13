import React, { useState } from 'react';
import { Modal } from '../../context/ModalContext';
import VaultForm from '../VaultForm/VaultForm';

function VaultFormModal({authenticated, setAuthenticated}) {
    const [showModal, setShowModal] = useState(false)

    return(
        <>
            <button onClick={() => setShowModal(true)}>Create Vault</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <VaultForm></VaultForm>
                </Modal>
            )}
        </>
    )
}
export default VaultFormModal