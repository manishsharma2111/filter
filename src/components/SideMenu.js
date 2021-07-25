import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { Tabs, Tab } from '@material-ui/core';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { useDispatch } from 'react-redux';
import { filterLaunches, sortLaunches } from '../store/actions/';

const drawerWidth = 270;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        color: '#000',
        backgroundColor: '#fff',
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        backgroundColor: '#fff',
        width: drawerWidth,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: '80%',
        marginBottom: '100px',
    },
    tab: {
        marginTop: '50px',
    },
}));

function SideMenu() {
    const classes = useStyles();
    const obj = {
        eventType: 'all',
        time: { startTime: null, endTime: null },
    };

    const sortO = {
        sort: '',
    };

    const [filtersObj, setFiltersObj] = React.useState(obj);
    const [sortObj, setSortObj] = React.useState(sortO);
    const [value, setValue] = React.useState(0);

    const dispatch = useDispatch();
    const handleDateChange = (type, value) => {
        const obj = Object.assign({}, filtersObj, {
            time: {
                ...filtersObj.time,
                [type === 0 ? 'startTime' : 'endTime']: value
                    ? moment(value).format()
                    : null,
            },
        });
        setFiltersObj(obj);
        dispatch(filterLaunches(obj, sortObj));
    };

    const handleChange = (text) => {
        const obj = Object.assign({}, filtersObj, {
            eventType: text.target.value,
        });
        setFiltersObj(obj);
        dispatch(filterLaunches(obj, sortObj));
    };

    const handleTabChange = (event, value) => {
        const obj = Object.assign({}, sortObj, {
            sort: value,
        });
        setSortObj(obj);
        dispatch(sortLaunches(obj));
        setValue(value);
        console.log(value);
    };
    const drawer = (
        <div>
            {console.log(filtersObj)}
            <div className={classes.toolbar} />

            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Launches</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={filtersObj.eventType}
                    onChange={handleChange}
                >
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='upcoming'>Upcoming</MenuItem>
                    <MenuItem value='past'>Past</MenuItem>
                </Select>
            </FormControl>
            <List>
                <Typography variant='h6' Wrap>
                    <em> Filter</em>
                </Typography>

                {[filtersObj.time.startTime, filtersObj.time.endTime].map(
                    (text, index) => (
                        <ListItem button key={index}>
                            {console.log('sss', text, index)}
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <KeyboardDatePicker
                                    placeholder='MM/DD/YYYY'
                                    format={'MM/DD/YYYY'}
                                    value={text}
                                    onChange={(val) =>
                                        handleDateChange(index, val)
                                    }
                                    disableOpenOnEnter
                                    animateYearScrolling={true}
                                    clearable
                                    onInputChange={(e) => {}}
                                />
                            </MuiPickersUtilsProvider>
                        </ListItem>
                    )
                )}
            </List>
            <div>
                <Tabs
                    orientation='vertical'
                    variant='scrollable'
                    scrollButtons='auto'
                    className={classes.tab}
                    value={value}
                    onChange={handleTabChange}
                    textColor='primary'
                    indicatorColor='primary'
                >
                    <Typography variant='h6' Wrap>
                        <em> Sort</em>
                    </Typography>
                    <Tab label='Name' value={'name'} />
                    <Tab label='Date' value={'date'} />
                </Tabs>
            </div>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position='fixed' className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        className={classes.menuButton}
                    ></IconButton>
                    <Typography variant='h2' Wrap>
                        <em> SPACEX</em>
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label='mailbox folders'>
                <Hidden xs Down implementation='css'>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant='permanent'
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default SideMenu;
