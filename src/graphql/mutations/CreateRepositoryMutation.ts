import graphql from 'babel-plugin-relay/macro';

export const CreateRepositoryMutation = graphql`
    mutation CreateRepositoryMutation($input: CreateRepositoryInput!) {
        createRepository(input: $input){
            repository {
                id, name, description, isPrivate
            }
        }
    }
`
