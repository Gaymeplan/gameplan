import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GET_ANDREW, GET_USERS } from '../graphql/queries/UserQueries';
import Loading from './Loading';

export default function Login() {
    const { data, error, loading } = useQuery(GET_USERS);
    if (loading)
        return (
            <View style={styles.container}>
                <Loading inheritedStyles={styles} />
            </View>
        );
    if (error) {
        <View style={styles.container}>
            <Text>{error}</Text>
        </View>;
    }
    console.log('data, loading, error', data, loading, error);
    return (
        <View style={styles.container}>
            <Text style={styles.boldText}>Login Screen</Text>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        data.users.map((user: User) => (
                            <tr>
                                <td>{user.userName}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boldText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    normalText: {
        color: '#fff',
        fontSize: 12,
    },
});
