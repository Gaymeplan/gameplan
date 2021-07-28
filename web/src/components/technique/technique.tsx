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
import React, { useState } from 'react';
import { ITechnique } from '../../model/technique';
import TechniqueEditor from './technique-editor';

type TechniqueProps = { technique: ITechnique };

const Technique = (props: TechniqueProps) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

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
                    <Button size="small" onClick={() => setOpen(true)}>
                        Edit This Technique
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
                    <TechniqueEditor technique={props.technique} />
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

export default Technique;
