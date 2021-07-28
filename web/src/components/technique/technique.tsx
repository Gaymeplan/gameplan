import {
    Backdrop,
    Button,
    Card,
    CardActions,
    CardContent,
    Fade,
    makeStyles,
    Theme,
    Modal,
    Typography,
    createStyles,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import { ITechnique } from '../../model/technique';
import TechniqueEditor from './technique-editor';
import { DELETE_TECHNIQUE } from '../../gql/technique';
import { useMutation } from '@apollo/client';
import AppToaster from '../../common/AppToaster';
import { Intent } from '@blueprintjs/core';

type TechniqueProps = { technique: ITechnique };

const Technique = (props: TechniqueProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [deleteTechnique] = useMutation(DELETE_TECHNIQUE);

    return (
        <div>
            <Card
                className={classes.root}
                variant="outlined"
                key={props.technique.id}
            >
                <CardContent>
                    <Typography
                        variant="h4"
                        component="h4"
                        color="textSecondary"
                        gutterBottom
                    >
                        {props.technique.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {props.technique.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<EditIcon />}
                        onClick={() => setOpen(true)}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={() => {
                            handleTechniqueDelete(
                                props.technique,
                                deleteTechnique,
                                AppToaster
                            );
                        }}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
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
                    <TechniqueEditor
                        technique={props.technique}
                        setOpen={setOpen}
                    />
                </Fade>
            </Modal>
        </div>
    );
};

const handleTechniqueDelete = (
    technique: ITechnique,
    mutation: any,
    toaster: any
) => {
    mutation({
        variables: {
            id: technique.id,
        },
    }).then((result: any) => {
        if (result.data) {
            if (result) {
                toaster.show({
                    intent: Intent.SUCCESS,
                    message: `${technique.name} Deleted`,
                });
            } else {
                toaster.show({
                    intent: Intent.DANGER,
                    message: `Error adding ${technique.name}`,
                });
            }
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

export default Technique;
