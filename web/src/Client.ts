import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/react-hooks';

const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetchOptions: {
        mode: 'no-cors',
    },
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
