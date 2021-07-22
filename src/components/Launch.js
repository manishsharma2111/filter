import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { getLaunches } from '../store/actions/';
import { CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        maxWidth: 300,
        marginBottom: '20px',
        margin: 'auto',
        transition: '0.3s',
        boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
        '&:hover': {
            boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
        },
    },
    media: {
        paddingTop: '56.25%',
    },
    content: {
        textAlign: 'left',
        padding: '30px',
    },
    divider: {
        margin: '20px',
    },
    heading: {
        fontWeight: 'bold',
    },
    subheading: {
        lineHeight: 1.8,
    },
    avatar: {
        display: 'inline-block',
        border: '2px solid white',
        '&:not(:first-of-type)': {
            marginLeft: ' 25px',
        },
    },
});

export default function LaunchCard() {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLaunches());
    }, [dispatch]);
    const launch = useSelector((state) => state.launches);

    console.log(launch);

    const renderCard = React.useMemo(
        () => (item, index) => {
            return (
                <Card className={classes.card} key={index}>
                    {console.log(item)}
                    <CardMedia
                        className={classes.media}
                        image={item.links.mission_patch}
                    />
                    <CardContent className={classes.content}>
                        <Typography
                            className={'MuiTypography--heading'}
                            variant={'h6'}
                            gutterBottom
                        >
                            Nature Around Us
                        </Typography>
                        <Typography
                            className={'MuiTypography--subheading'}
                            variant={'caption'}
                        >
                            We are going to learn different kinds of species in
                            nature that live together to form amazing
                            environment.
                        </Typography>
                        <Divider className={classes.divider} light />
                        <CardActions>
                            <Button size='small' color='primary'>
                                View
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            );
        },
        []
    );
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            {launch.launches.map((item, index) => renderCard(item, index))}
        </div>
    );
}
