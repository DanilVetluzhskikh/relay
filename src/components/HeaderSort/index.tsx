import React, { FC, FormEvent, useContext, useState } from 'react'
import { Dropdown, IDropdownOption, PrimaryButton } from '@fluentui/react'
import { optionsSortRepositories } from '../../mocks/options'
import { CreateModal } from '../CreateModal'
import { listContext } from '../ListRepositories'
import { OrderDirection, RepositoryOrder } from '../../graphql/query/__generated__/UserFragmentRefetchableQuery.graphql'

import './styles.css'

export const HeaderSort: FC = () => {
    const propsContext = useContext(listContext) 
     
    const [isOpen, setIsOpen] = useState(false)
    const [sort, setSort] = useState<RepositoryOrder | null>(null)

    const handleClose = () => setIsOpen(false)
    const handleOpen = () => setIsOpen(true)

    const selectSortOption = (_: FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        if(option?.id){            
            const orderBy: RepositoryOrder = {
                field: 'NAME',
                direction: option.id as OrderDirection,
            }

            setSort(orderBy)
        
            propsContext?.refetch({
                orderBy
            })
        }
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
                sort={sort}
            />
        </>
    )
}
