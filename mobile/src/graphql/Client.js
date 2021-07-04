import {
    ApolloClient,
    InMemoryCache,
    NormalizedCacheObject,
    createHttpLink,
} from '@apollo/client';

const enchancedFetch = (url, init) => {
    const token = getToken();
    return fetch(url, {
        ...init,
        headers: {
            ...init.headers,
            'Access-Control-Allow-Origin': '*',
            ...(token && { authorization: `Bearer ${token}` }),
        },
    }).then((response) => response);
};

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/graphql',
    fetchOptions: {
        mode: 'no-cors',
    },
    fetch: enchancedFetch,
});

export const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});
