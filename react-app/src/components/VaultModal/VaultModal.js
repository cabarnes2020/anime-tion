import React, { useState } from 'react';
import { Modal } from '../../context/ModalContext';
import VaultForm from '../VaultForm/VaultForm';
import './VaultModal.css'


function VaultFormModal() {
    const [showModal, setShowModal] = useState(false)

    return(
        <>
            <button className='vault-button' onClick={() => setShowModal(true)}>Create Vault</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <VaultForm></VaultForm>
                </Modal>
            )}
        </>
    )
}
export default VaultFormModal