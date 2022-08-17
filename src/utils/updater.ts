import { ConnectionHandler, RecordSourceSelectorProxy } from "relay-runtime";

export const createRepository = (store: RecordSourceSelectorProxy, id: string) => {
    const repositoryRecord = store.get(id);

    if(repositoryRecord){
        const connectionRecord = ConnectionHandler.getConnection(
            repositoryRecord,
            'UserFragment_repositories',
        );

        if(connectionRecord){
            const result = store.getRootField('createRepository')   
            const totalCount = Number(connectionRecord.getValue('totalCount'))  

            if(result){
                const repository = result.getLinkedRecord('repository');

                if(repository){
                    const newEdge = ConnectionHandler.createEdge(
                        store,
                        connectionRecord,
                        repository,
                        'Repository',
                    );

                    if(totalCount){
                        connectionRecord.setValue(totalCount + 1, 'totalCount')
                    }
                    
                    if(newEdge){
                        ConnectionHandler.insertEdgeBefore(
                            connectionRecord,
                            newEdge,
                        );                
                    }
                }
            }
        }
    }
}
