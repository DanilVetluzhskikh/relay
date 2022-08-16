import { IColumn, PrimaryButton } from "@fluentui/react";
import { Repository } from "../types/user";

const renderLanguage = ({languages}: Repository) =>  (
    languages?.edges?.map(({node: {name, id}}) => (
        <PrimaryButton 
            key={id}
            style={{marginRight: 10}}
        >{name}</PrimaryButton>
    ))
)

const renderDescription = ({description}: Repository) => description ?? 'Missing'

export const columnsRepositories: IColumn[] = [ 
    { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 200, isResizable: true, onRender: renderDescription },
    { key: 'column3', name: 'Languages', fieldName: 'languages', minWidth: 500, maxWidth: 600, isResizable: true, onRender: renderLanguage },
    { key: 'column4', name: 'Private', fieldName: 'isPrivate', minWidth: 100, maxWidth: 200, isResizable: true},
];
