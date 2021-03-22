import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux"
import {createVault} from '../../store/session'
import './VaultForm.css'


const VaultForm = ({authenticated, setAuthenticated, setShowModal}) => {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [name, setName] = useState("")

    const onCreateVault = async(e) => {
        e.preventDefault()
        dispatch(createVault(name))
    }

    const updateName = (e) => {
        setName(e.target.value)
    }

    return (
        <form onSubmit={onCreateVault}>
            <div>
                {errors.map((error) => (
                    <div>{error}</div>
                ))}
            </div>
            <div className="modal-container">
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Vault Name"
                        value={name}
                        onChange={updateName}
                    />
                </div>
                <button className='vault' type="submit">Create Vault</button>
            </div>
        </form>
    )
}
export default VaultForm;