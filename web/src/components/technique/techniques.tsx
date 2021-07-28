import { useQuery } from '@apollo/client';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import { TECHNIQUES } from '../../gql/technique';
import { ITechnique } from '../../model/technique';
import Technique from './technique';

type TechniquesProps = {};

const Techniques = (props: TechniquesProps) => {
    const { loading, error, data } = useQuery(TECHNIQUES, {
        pollInterval: 5000,
    });
    const classes = useStyles();

    if (loading) return <CircularProgress />;
    if (error) return <p>Error...</p>;
    return (
        <div>
            <Typography variant="h1" component="h2" gutterBottom>
                Techniques
            </Typography>
            {data.techniques.map((technique: ITechnique) => (
                <Technique key={technique.id} technique={technique} />
            ))}
        </div>
    );
};

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default Techniques;
