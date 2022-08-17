import graphql from 'babel-plugin-relay/macro';

export const fragmentUserInfo: any = graphql`
    fragment GetUserInfoQueryFragment on User 
    @refetchable(queryName: "UserFragmentRefetchableQuery")
    @argumentDefinitions(
      first: {type: "Int", defaultValue: 3},
      cursor: {type: "String"},
      orderBy: {type: "RepositoryOrder"}
    )
    {
    repositories(
        first: $first,
        after: $cursor,
        orderBy: $orderBy
      ) @connection(
        key: "UserFragment_repositories",
      ){
        totalCount, edges {
            node {
    	      id, name, description, isPrivate, languages(first: 5){
                  edges {
                      node {
                          name, id
                      }
                  }
              }
    	    }
        }
      }
  }
`

export const queryUserInfo = graphql`
  query GetUserInfoQuery{
    user (login: "DanilVetluzhskikh") {
      ...GetUserInfoQueryFragment
    }
  }
`;


export const repositoriesConnectionId = fragmentUserInfo?.repositories?.__id
