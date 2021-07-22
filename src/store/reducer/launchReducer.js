import { GET_LAUNCHES } from '../types';

const initialState = {
    launches: [],
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
        default:
            return state;
    }
}
