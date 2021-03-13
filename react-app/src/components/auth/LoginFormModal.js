import React, { useState } from 'react';
import { Modal } from '../../context/ModalContext';
import LoginForm from './LoginForm';
import './LoginFormModal.css'
function LoginFormModal({authenticated, setAuthenticated}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='login-button' onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;