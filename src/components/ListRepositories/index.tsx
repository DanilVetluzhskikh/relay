import React, { FC, FormEvent, useEffect, useState } from "react";
import { DetailsList, IDropdownOption, PrimaryButton } from "@fluentui/react";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { Repository, UserData } from "../../types/user";
import { UserInfoQuery } from "../../graphql/query";
import { columnsRepositories } from "../../mocks/columns";

import './styles.css'

interface ListRepositoriesProps {
    preloadedQuery: PreloadedQuery<any, Record<string, unknown>> | null | undefined;
    changeCount: () => void;
    currentCount: number;
    selectSortOption: (e: FormEvent<HTMLDivElement>, option?: IDropdownOption) => void;
}

export const ListRepositories: FC<ListRepositoriesProps> = ({
    preloadedQuery, 
    changeCount,
    currentCount,
}) => {    
    const [repositories, setRepositories] = useState<Repository[]>([])
    
    const data = usePreloadedQuery(UserInfoQuery, preloadedQuery as any) as UserData;
    const countRepositories =  data?.user?.repositories?.totalCount

    useEffect(() => {
        const resultArray = data?.user?.repositories?.edges

        if(resultArray?.length){
            setRepositories(resultArray.map((item: any) => ({...item.node})))
        }
    }, [data])

    return (
        <div className="container"> 
            <DetailsList
                items={repositories}
                columns={columnsRepositories}
                getKey={getKey}
                isSelectedOnFocus={false}
            />

            {currentCount < countRepositories && (
                <PrimaryButton onClick={changeCount}>Load more</PrimaryButton>
            )}
        </div>
    )
}

const getKey = (item: Repository) => item.id
