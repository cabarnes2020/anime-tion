import React, { useState } from 'react';
import { Modal } from '../../context/ModalContext';
import SignUpForm from './SignUpForm';
import './SignupFormModal.css'

function SignupFormModal({ authenticated, setAuthenticated }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='signup-button' onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;