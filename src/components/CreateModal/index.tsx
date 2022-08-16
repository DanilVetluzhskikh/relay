import React, { FC, FormEvent, useState, MouseEvent } from 'react'
import { Modal, PrimaryButton, TextField, Toggle } from '@fluentui/react'
import { useMutation } from 'react-relay';
import { CreateRepositoryMutation } from '../../graphql/mutations/CreateRepositoryMutation';
import { CreateRepositoryMutation as CreateRepositoryMutationType } from '../../graphql/mutations/__generated__/CreateRepositoryMutation.graphql';

import './styles.css'

interface CreateModalProps {
    isOpen: boolean;
    handleClose: () => void;
    refetch: () => void;
}

export const CreateModal: FC<CreateModalProps> = ({
    isOpen,
    handleClose,
    refetch
}) => {
    const [isResult, setIsResult] = useState<boolean | null>(null)
    const [errorName, setErrorName] = useState('')
    const [name, setName] = useState('')
    const [description, setDescritpion] = useState('')
    const [isVisibility, setIsVisibility] = useState(false)

    const [commitMutation, isMutationInFlight] = useMutation<CreateRepositoryMutationType>(CreateRepositoryMutation)

    const handleChangeName = (_: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if(newValue !== undefined){
            setName(newValue)
        }
    }

    const handleChangeDescription = (_: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if(newValue !== undefined){
            setDescritpion(newValue)
        }
    }

    const handleChangeVisibility = (_: MouseEvent<HTMLElement, globalThis.MouseEvent>, checked?: boolean | undefined) => {        
        if(checked !== undefined){
            setIsVisibility(checked)
        }
    }

    const resetForm = () => {
        setName('')
        setDescritpion('')
        setIsVisibility(false)
    }

    const submitForm = () => {
        setErrorName('')
        setIsResult(null)

        if(!name.trim().length){
            return setErrorName('Required field')
        }

        commitMutation({
            variables: {
                input: {
                    name,
                    description,
                    visibility: isVisibility ? 'PRIVATE' : 'PUBLIC'
                },
            },
            onCompleted(){
                setIsResult(true)
                resetForm()
                refetch()
            },
            onError(){
                setIsResult(false)
            }
        })        
    }

    const isSuccess = isResult === true

    return (
        <Modal isOpen={isOpen}>
            <div className="container-modal">
                <button 
                    onClick={handleClose}
                    className="close-icon"
                >
                    <i>X</i>
                </button>

                <span className="title">Create repository</span>

                <TextField
                    label="Name"
                    placeholder="my repository..."
                    className="input"
                    value={name}
                    onChange={handleChangeName}
                    errorMessage={errorName}
                    required
                />

                <TextField
                    label="Description"
                    placeholder="description for my repository..."
                    className="input"
                    value={description}
                    onChange={handleChangeDescription}
                />

                <Toggle
                    label="Visiability"
                    onChange={handleChangeVisibility}
                    checked={isVisibility}
                />

                <PrimaryButton 
                    className="submit-button"
                    onClick={submitForm}
                    disabled={isMutationInFlight}
                >Создать</PrimaryButton>

                {isResult !== null && (
                    <span
                        className={isSuccess ? 'success' : 'error'}
                    >{isSuccess ? 'Repository created successfully' : 'Error'}</span>
                )}
            </div>
        </Modal>
    )
}
