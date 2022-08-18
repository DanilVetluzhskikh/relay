import React, { createContext, FC, useState } from "react";
import { DetailsList, PrimaryButton, Spinner } from "@fluentui/react";
import { usePaginationFragment } from "react-relay";
import { Repository } from "../../types/user";
import { columnsRepositories } from "../../mocks/columns";
import { fragmentUserInfo } from "../../graphql/query";
import { GetUserInfoQueryFragment$key} from '../../graphql/query/__generated__/GetUserInfoQueryFragment.graphql'
import { FIRST_LOAD } from "../../constants/repositories";
import { HeaderSort } from "../HeaderSort";
import { GetUserInfoQuery } from "../../graphql/query/__generated__/GetUserInfoQuery.graphql";
import {GetUserInfoQuery$data} from '../../graphql/query/__generated__/GetUserInfoQuery.graphql'
import { listContextProps } from "../../types/context";
import {EditModal} from '../EditModal'

import './styles.css'

interface ListRepositoriesProps {
    preloaded: GetUserInfoQuery$data
}

export const listContext = createContext<listContextProps | null>(null);

export const ListRepositories: FC<ListRepositoriesProps> = ({
    preloaded
}) => {
    const [isModalEditOpen, setIsModalEditOpen] = useState(false)
    const [currentItem, setCurrentItem] = useState<Repository | null>(null)
    const {data, loadNext, hasNext, isLoadingNext, refetch} = usePaginationFragment<GetUserInfoQuery, GetUserInfoQueryFragment$key>(fragmentUserInfo, preloaded.user)

    const handleLoadMore = () => {
        loadNext(FIRST_LOAD)
    }

    const handleOpenEditModal = (item: Repository) => {
        setCurrentItem(item)
        setIsModalEditOpen(true)
    }
    const handleCloseEditModal = () => setIsModalEditOpen(false)

    const providerObject = {
        refetch,
        handleCloseEditModal,
        isModalEditOpen,
        currentItem,
        id: data?.id,
        totalCount: data?.repositories.totalCount
    }

    const resultList = data?.repositories.edges?.map(item => ({...item?.node})) || []

    return (
        <listContext.Provider value={providerObject}>
            <div className="container">
                <HeaderSort />

                <DetailsList
                    items={resultList}
                    columns={columnsRepositories}
                    getKey={getKey}
                    onItemInvoked={handleOpenEditModal}
                />


                {
                    isLoadingNext 
                        ? <Spinner label="Loading..." /> 
                        : hasNext && <PrimaryButton onClick={handleLoadMore}>Load more</PrimaryButton>
                }

                <EditModal />
            </div>
        </listContext.Provider>
    )
}

const getKey = (item: Repository) => item.id
