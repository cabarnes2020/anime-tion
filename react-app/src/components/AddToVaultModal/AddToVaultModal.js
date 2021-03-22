import React, { useState } from 'react';
import { Modal } from '../../context/ModalContext';
import AddToVaultForm from '../AddToVaultForm/AddToVaultForm';
import './AddToVaultModal.css'


function AddToVaultModal() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <button className='add-to-vault-button' onClick={() => setShowModal(true)}>Add To A Vault</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddToVaultForm></AddToVaultForm>
                </Modal>
            )}
        </>
    )
}
export default AddToVaultModal