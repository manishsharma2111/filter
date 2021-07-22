import React from 'react';
import { Paper, makeStyles } from '@material-ui/core';
import LaunchCard from './Launch';
const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(5),
        position: 'absolute',
    },
}));
export default function Launches() {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.pageContent}>
                <LaunchCard />
            </Paper>
        </>
    );
}
