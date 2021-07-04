import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://tyoku.sse.codesandbox.io/graphql',
    cache: new InMemoryCache(),
});
