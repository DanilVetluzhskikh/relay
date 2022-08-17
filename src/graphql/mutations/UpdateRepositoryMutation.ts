import graphql from 'babel-plugin-relay/macro';

export const UpdateRepositoryMutation = graphql`
    mutation UpdateRepositoryMutation($input: UpdateRepositoryInput!) {
        updateRepository(input: $input){
            repository {
                id, name, description, isPrivate
            }
        }
  }
`
