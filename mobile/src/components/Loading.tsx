import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../styles/Colors';

interface loadingProps {
    inheritedStyles: any;
}

function Loading(props: loadingProps) {
    return <Text style={props.inheritedStyles.boldText}>Loading...</Text>;
}

const styles = StyleSheet.create({
    container: {
        margin: 'auto',
        fill: colors.grey,
        path: {
            transformOrigin: 'center',
            animation: `1s linear infinite`,
        },
    },
});

export default Loading;
