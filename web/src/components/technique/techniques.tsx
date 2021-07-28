import { useQuery } from '@apollo/client';
import {
    Backdrop,
    Button,
    Card,
    CardActions,
    CardContent,
    CircularProgress,
    createStyles,
    Divider,
    Fade,
    makeStyles,
    Modal,
    Theme,
    Typography,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import React, { useState } from 'react';
import { TECHNIQUES } from '../../gql/technique';
import { ITechnique } from '../../model/technique';
import Technique from './technique';
import TechniqueAdd from './technique-add';

type TechniquesProps = {};

const Techniques = (props: TechniquesProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const { loading, error, data } = useQuery(TECHNIQUES, {
        pollInterval: 5000,
    });

    if (loading) return <CircularProgress />;
    if (error) return <p>Error...</p>;
    return (
        <div>
            <Typography variant="h1" component="h2" gutterBottom>
                Techniques
            </Typography>
            <Button
                variant="contained"
                color="primary"
                startIcon={<Add />}
                style={{ marginTop: '1em' }}
                onClick={() => {
                    setOpen(true);
                }}
            >
                Add Technique
            </Button>

            <Divider />

            {data.techniques.map((technique: ITechnique) => (
                <Technique key={technique.id} technique={technique} />
            ))}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={() => setOpen(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <TechniqueAdd setOpen={setOpen} />
                </Fade>
            </Modal>
        </div>
    );
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

export default Techniques;
