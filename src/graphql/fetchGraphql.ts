import { Variables } from "relay-runtime";

async function fetchGraphQL(text: string | null | undefined, variables: Variables) {
    const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
  
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables
      }),
    });
  
    return await response.json();
  }
  
  export default fetchGraphQL;
