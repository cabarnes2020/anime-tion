import React, { useState } from 'react';
import { Modal } from '../../context/ModalContext';
import LoginForm from './LoginForm';

function LoginFormModal({authenticated, setAuthenticated}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;