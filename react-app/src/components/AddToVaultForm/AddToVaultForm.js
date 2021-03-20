import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { addToVault } from '../../store/session'
import './AddToVaultForm.css'


const AddToVaultForm = ({ authenticated, setAuthenticated, setShowModal }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const {animeId} = useParams()
    const [errors, setErrors] = useState([])
    const [idVault, setIdVault] = useState()

    console.log("VAULT", idVault)
    const onAddToVault = async (e) => {
        e.preventDefault()
        dispatch(addToVault(idVault ,animeId))
    }

    return (
        <form onSubmit={onAddToVault}>
            <div>
                {errors.map((error) => (
                    <div>{error}</div>
                ))}
            </div>
            <div className="add-to-vault-container">
                <div className='radio-list'>
                    {sessionUser &&
                        sessionUser.vaults.map((vault) => {
                            return (
                                <>
                                    <label htmlFor="name">{vault.name}</label>
                                    <input
                                        name={vault.name}
                                        checked={Number(idVault) === Number(vault.id)}
                                        onClick={(e) => setIdVault(e.target.value)}
                                        type="radio"
                                        value={vault.id}
                                    />
                                </>
                            )
                        })
                    }
                </div>
                <button className='add-to-vault' type="submit">Add to Vault</button>
            </div>
        </form>
    )
}
export default AddToVaultForm;