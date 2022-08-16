import React, { FC, FormEvent, Suspense, useState} from "react";
import { loadQuery } from "react-relay";
import { ListRepositories } from "./components/ListRepositories";
import { UserInfoQuery } from "./graphql/query/GetUserInfoQuery";
import RelayEnvironment from "./graphql/RelayEnvironment";
import { Dropdown, IDropdownOption, PrimaryButton, Spinner } from "@fluentui/react";
import { FIRST_LOAD } from "./constants/repositories";
import { RepositoryOrder} from './graphql/query/__generated__/GetUserInfoQuery.graphql'
import { optionsSortRepositories } from "./mocks/options";
import { CreateModal } from "./components/CreateModal";

export const AppInit: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [count, setCount] = useState(FIRST_LOAD)
    const [sort, setSort] = useState<RepositoryOrder>()
    
    const preloadedQuery = loadQuery(RelayEnvironment, UserInfoQuery, {
        first: count,
        orderBy: sort,
    });

    const changeCount = () => {
        setCount(prev => prev+=FIRST_LOAD)
    }

    const selectSortOption = (_: FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
        if(option?.id){
            setSort({
                field: 'NAME',
                direction: option.id as 'ASC' | 'DESC'
            })
        }
    }

    const handleClose = () => setIsOpen(false)
    const handleOpen = () => setIsOpen(true)
    
    return (
        <>
            <div className="header-container">
                <Dropdown
                    placeholder="select sort..."
                    label="Sort by name"
                    options={optionsSortRepositories}
                    onChange={selectSortOption}
                />

                <PrimaryButton onClick={handleOpen}>Create repository</PrimaryButton>
            </div>

            <Suspense fallback={<Spinner label="Loading... " />}>
                <ListRepositories
                    preloadedQuery={preloadedQuery}
                    changeCount={changeCount}
                    currentCount={count}
                    selectSortOption={selectSortOption}
                />
            </Suspense>

            <CreateModal
                isOpen={isOpen}
                handleClose={handleClose}
                refetch={() => undefined}
            />
        </>
    );
  }
