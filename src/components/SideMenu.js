import React, { useState } from 'react';
import {
    FormControl,
    makeStyles,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: '0px',
        width: '320px',
        height: '100%',
        //backgroundColor: '#253053',
        color: 'white',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function SideMenu() {
    const [value, setValue] = useState('');
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues({
    //         ...values,
    //         [name]: value,
    //     });
    // };
    const classes = useStyles();

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    console.log(value);

    return (
        <div className={classes.sideMenu}>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={value}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
