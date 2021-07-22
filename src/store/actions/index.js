import { GET_LAUNCHES, LAUNCH_ERROR } from '../types';
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
