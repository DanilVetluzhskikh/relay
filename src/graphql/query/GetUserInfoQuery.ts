import graphql from 'babel-plugin-relay/macro';

export const UserInfoQuery = graphql`
  query GetUserInfoQuery($first: Int, $orderBy: RepositoryOrder) {
    user(login: "DanilVetluzhskikh") {
      login, repositories(orderBy: $orderBy, first: $first) {
        totalCount, edges {
          node {
          	id, name, description, isPrivate, languages(first: 5) {
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
  }
`;
