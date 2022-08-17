import React, { FC, FormEvent, useContext, useState } from 'react'
import { Dropdown, IDropdownOption, PrimaryButton } from '@fluentui/react'
import { optionsSortRepositories } from '../../mocks/options'
import { CreateModal } from '../CreateModal'
import { listContext } from '../ListRepositories'

import './styles.css'

export const HeaderSort: FC = () => {
    const propsContext = useContext(listContext) 
     
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => setIsOpen(false)
    const handleOpen = () => setIsOpen(true)

    const selectSortOption = (_: FormEvent<HTMLDivElement>, option?: IDropdownOption) => {        
        propsContext?.refetch({
            orderBy: {
                field: 'NAME',
                direction: option?.id,
            },
            first: propsContext?.count
        })
    }

    return (
        <>
            <div className="header-container">
                <Dropdown
                    placeholder="select sort..."
                    label="Sort by name"
                    options={optionsSortRepositories}
                    onChange={selectSortOption}
                />

                <span className="count">Repository counter: {propsContext?.totalCount}</span>

                <PrimaryButton onClick={handleOpen}>Create repository</PrimaryButton>
            </div>


            <CreateModal
                isOpen={isOpen}
                handleClose={handleClose}
            />
        </>
    )
}
