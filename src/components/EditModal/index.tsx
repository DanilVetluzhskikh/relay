import React, { FC, FormEvent, useContext, useEffect, useState } from 'react'
import { Modal, PrimaryButton, TextField } from '@fluentui/react'
import { ModalContainer } from '../../ui/containers/ModalContainer';
import { listContext } from '../ListRepositories';
import { useMutation } from 'react-relay';
import { UpdateRepositoryMutation } from '../../graphql/mutations/UpdateRepositoryMutation';
import { UpdateRepositoryMutation as UpdateRepositoryMutationType } from '../../graphql/mutations/__generated__/UpdateRepositoryMutation.graphql';

import './styles.css'

export const EditModal: FC = () => {
    const propsContext = useContext(listContext)

    const [isResult, setIsResult] = useState<boolean | null>(null)
    const [errorName, setErrorName] = useState('')
    const [description, setDescritpion] = useState<string>('')
    const [name, setName] = useState<string>('')

    const [commitMutation, isMutationInFlight] = useMutation<UpdateRepositoryMutationType>(UpdateRepositoryMutation)

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

    const submitForm = () => {
        setErrorName('')
        setIsResult(null)

        if(!name.trim().length){
            return setErrorName('Required field')
        }

        if(propsContext?.currentItem?.id){
            commitMutation({
                variables: {
                    input: {
                        repositoryId: propsContext.currentItem.id,
                        name,
                        description,
                    }
                },
                onCompleted(){
                    handleCloseEditModal()
                },
                onError(){
                    setIsResult(false)
                }
            }) 
        } 
    }

    useEffect(() => {
        setDescritpion(propsContext?.currentItem?.description ?? "")
        setName(propsContext?.currentItem?.name ?? "")
    }, [propsContext])

    if(!propsContext){
        return null
    }

    const {isModalEditOpen, handleCloseEditModal} = propsContext

    return (
        <Modal isOpen={isModalEditOpen}>
            <ModalContainer
                title="Edit repository"
                isResult={isResult}
                textSuccess="Repository changed successfully"
                handleClose={handleCloseEditModal}
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

                <PrimaryButton 
                    className="submit-button"
                    onClick={submitForm}
                    disabled={isMutationInFlight}
                >Edit</PrimaryButton>
            </ModalContainer>
        </Modal>
    )
}
