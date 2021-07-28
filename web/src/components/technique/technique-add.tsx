import { useMutation } from '@apollo/client';
import { Card, Intent } from '@blueprintjs/core';
import {
    Button,
    CardContent,
    createStyles,
    FormControl,
    makeStyles,
    TextField,
    Theme,
    Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import AppToaster from '../../common/AppToaster';
import { ADD_TECHNIQUE } from '../../gql/technique';

type TechniqueAddProps = {
    setOpen: any;
};

const TechniqueAdd = (props: TechniqueAddProps) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [addTechnique] = useMutation(ADD_TECHNIQUE);

    return (
        <Card className={classes.root}>
            <Typography
                variant="h4"
                component="h4"
                color="textSecondary"
                gutterBottom
            >
                Add a new technique
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
                        label="Description"
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
                            handleTechniqueAdd(
                                name,
                                description,
                                addTechnique,
                                AppToaster
                            );
                            props.setOpen(false);
                        }}
                    >
                        Save Technique
                    </Button>
                </FormControl>
            </CardContent>
        </Card>
    );
};

const handleTechniqueAdd = (
    name: string,
    description: string,
    mutation: any,
    toaster: any
) => {
    mutation({
        variables: {
            name: name,
            description: description,
        },
    }).then((result: any) => {
        if (result) {
            toaster.show({
                intent: Intent.SUCCESS,
                message: `${name} added`,
            });
        } else {
            toaster.show({
                intent: Intent.DANGER,
                message: `Error adding ${name}`,
            });
        }
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

export default TechniqueAdd;
