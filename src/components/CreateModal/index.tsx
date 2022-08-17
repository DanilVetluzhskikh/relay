import React, { FC, FormEvent, useState, MouseEvent, useContext } from 'react'
import { Modal, PrimaryButton, TextField, Toggle } from '@fluentui/react'
import { useMutation } from 'react-relay';
import { CreateRepositoryMutation } from '../../graphql/mutations/CreateRepositoryMutation';
import { CreateRepositoryMutation as CreateRepositoryMutationType } from '../../graphql/mutations/__generated__/CreateRepositoryMutation.graphql';
import { listContext } from '../ListRepositories';
import { createRepository } from '../../utils/updater'
import { ModalContainer } from '../../ui/containers/ModalContainer';

import './styles.css'

interface CreateModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

export const CreateModal: FC<CreateModalProps> = ({
    isOpen,
    handleClose,
}) => {
    const propsContext = useContext(listContext)
    
    const [isResult, setIsResult] = useState<boolean | null>(null)
    const [errorName, setErrorName] = useState('')
    const [description, setDescritpion] = useState('')
    const [isVisibility, setIsVisibility] = useState(false)
    const [name, setName] = useState('')

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
                }
            },
            onCompleted(){
                setIsResult(true)
                resetForm()
            },
            onError(){
                setIsResult(false)
            },
            updater(store){
                if(propsContext?.id){
                    createRepository(store, propsContext.id)                  
                }
            }
        })        
    }    

    return (
        <Modal isOpen={isOpen}>
            <ModalContainer
                handleClose={handleClose}
                isResult={isResult}
                textSuccess="Repository created successfully"
                title="Create repository"
            >
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
                >Create</PrimaryButton>
            </ModalContainer>
        </Modal>
    )
}
