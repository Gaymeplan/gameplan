import { useMutation } from '@apollo/client';
import {
    Card,
    CardContent,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    FormControl,
    TextField,
    Button,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import { UPDATE_TECHNIQUE } from '../../gql/technique';
import { ITechnique } from '../../model/technique';

type TechniqueEditorProps = {
    technique: ITechnique;
};

const TechniqueEditor = (props: TechniqueEditorProps) => {
    const classes = useStyles();
    const [name, setName] = useState(props.technique.name);
    const [description, setDescription] = useState(props.technique.description);

    const [updateTechnique] = useMutation(UPDATE_TECHNIQUE);

    return (
        <Card className={classes.root} variant="outlined">
            <Typography
                variant="h4"
                component="h4"
                color="textSecondary"
                gutterBottom
            >
                Edit technique
            </Typography>
            <CardContent>
                <FormControl>
                    <TextField
                        id="standard-basic"
                        label="Name"
                        value={name}
                        onChange={(event: any) => {
                            setName(event.target.value);
                        }}
                    />
                    <TextField
                        id="standard-basic"
                        label="Name"
                        value={description}
                        onChange={(event: any) => {
                            setDescription(event.target.value);
                        }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '1em' }}
                        onClick={() => {
                            const result = handleTechniqueUpdate(
                                props.technique.id,
                                name,
                                description,
                                updateTechnique
                            );
                        }}
                    >
                        Submit Changes
                    </Button>
                </FormControl>
            </CardContent>
        </Card>
    );
};

const handleTechniqueUpdate = (
    id: number,
    name: string,
    description: string,
    mutation: any
) => {
    mutation({
        variables: {
            id: id,
            name: name,
            description: description,
        },
    }).then((result: any) => {
        return result.data;
    });
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
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
    })
);

export default TechniqueEditor;
