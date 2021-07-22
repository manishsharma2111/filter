import React from 'react';
import {
    AppBar,
    Toolbar,
    Grid,
    InputBase,
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#fff',
    },
    searchInput: {
        backgroundColor: '#fef',
        opacity: '0.5',
        padding: '0',
        fontSize: '0.8rem',
        borderRadius: '6px',
        '&:hover': {
            backgroundColor: '#eef',
        },
        '& .MuiSvgIcon-root': {
            marginRight: '8px',
        },
    },
});

export default function Header() {
    const classes = useStyles();

    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase
                            placeholder='Search'
                            className={classes.searchInput}
                            // startAdornment={<SearchIcon fontSize='small' />}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
