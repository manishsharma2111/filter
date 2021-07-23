import { GET_LAUNCHES, FILTER_LAUNCHES } from '../types';

const initialState = {
    launches: [],
    filteredLaunches: [],
    loading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_LAUNCHES:
            return {
                ...state,
                launches: action.payload,
                loading: false,
            };
        case FILTER_LAUNCHES:
            return {
                ...state,
                filteredLaunches: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
