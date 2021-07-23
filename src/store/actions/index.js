import { GET_LAUNCHES, LAUNCH_ERROR, FILTER_LAUNCHES } from '../types';
import axios from 'axios';

export const getLaunches = () => async (dispatch) => {
    try {
        const res = await axios.get(`https://api.spacexdata.com/v3/launches`);

        dispatch({
            type: GET_LAUNCHES,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: LAUNCH_ERROR,
        });
    }
};

export const filterLaunches = (launches, time) => (dispatch) => {
    console.log(time);
    console.log('laun', launches);
    dispatch({
        type: FILTER_LAUNCHES,
        payload: {
            time: time,
            items:
                time === 'all'
                    ? launches
                    : time === 'upcoming'
                    ? launches.filter((item) => item.upcoming === true)
                    : launches.filter((item) => item.upcoming === false),
        },
    });
};
