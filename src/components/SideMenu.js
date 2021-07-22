import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundColor: '#253053',
    },
});

export default function SideMenu() {
    // const [values, setValues] = useState();
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setValues({
    //         ...values,
    //         [name]: value,
    //     });
    // };
    const classes = useStyles();
    return <div className={classes.sideMenu}></div>;
}
