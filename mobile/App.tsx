import { ApolloProvider, gql } from '@apollo/react-hooks';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { client } from './src/graphql/Client';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
    return (
        <ApolloProvider client={client}>
            <AppNavigator />
        </ApolloProvider>
    );
}
