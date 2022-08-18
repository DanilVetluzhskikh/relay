import { IColumn } from "@fluentui/react";
import { RenderDescription, RenderLanguages } from "./rendering";

export const columnsRepositories: IColumn[] = [ 
    { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Description', fieldName: 'description', minWidth: 100, maxWidth: 200, isResizable: true, onRender: RenderDescription },
    { key: 'column3', name: 'Languages', fieldName: 'languages', minWidth: 500, maxWidth: 600, isResizable: true, onRender: RenderLanguages },
    { key: 'column4', name: 'Private', fieldName: 'isPrivate', minWidth: 100, maxWidth: 200, isResizable: true},
];
