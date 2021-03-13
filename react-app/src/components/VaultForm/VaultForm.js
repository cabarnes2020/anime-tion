import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux"
import './VaultForm.css'

const VaultForm = ({authenticated, setAuthenticated, setShowModal}) => {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [name, setName] = useState("")

    const onCreateVault = async(e) => {
        e.preventDefault()
        const form = new FormData()
        form.append("name", name)

        // const res = await fetch('/api/vaults/new', {
        //     method:'POST',
        //     body: JSON.stringify() //add something to here!!
        // })
    }

    const updateName = (e) => {
        setName(e.target.value)
    }

    return (
        <form onSubmit={}>
            <div>
                {errors.map((error) => (
                    <div>{error}</div>
                ))}
            </div>
            <div className="modal-container">
                <div className="name-input">
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Vault Name"
                        value={name}
                        onChange={updateName}
                    />
                </div>
            </div>
        </form>
    )
}
export default VaultForm;