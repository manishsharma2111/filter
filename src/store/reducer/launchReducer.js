import moment from 'moment';
import { GET_LAUNCHES, FILTER_LAUNCHES, SORT_LAUNCHES } from '../types';

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
                filteredLaunches: action.payload,
                loading: false,
            };
        case FILTER_LAUNCHES:
            const filterObj = action.payload;
            let filterData = [...state.launches];
            if (filterObj.eventType === 'upcoming') {
                filterData = filterData.filter((x) => x.upcoming);
            } else if (filterObj.eventType === 'past') {
                filterData = filterData.filter((x) => !x.upcoming);
            }
            // } else if (filterObj.time.startTime === null) {
            //     filterObj.time.startTime = '2006-03-24T22:30:00.000Z';
            // } else if (filterObj.time.endTime === null) {
            //     filterObj.time.endTime = moment().format();
            // }
            // else if (filterObj.sort === 'name') {
            //     filterData = filterData.sort((a, b) =>
            //         a.mission_name.localeCompare(b.mission_name)
            //     );
            // } else if (filterObj.sort === 'date') {
            //     filterData = filterData.sort(function (left, right) {
            //         return moment
            //             .utc(left.launch_date_utc)
            //             .diff(moment.utc(right.launch_date_utc));
            //     });
            // }
            return {
                ...state,
                filteredLaunches: filterData,
                loading: false,
            };
        case SORT_LAUNCHES:
            const sortObj = action.payload;
            let sortData = [...state.filteredLaunches];
            console.log('xxx', sortData);
            if (sortObj.sort === 'name') {
                sortData = sortData.sort((a, b) =>
                    a.mission_name.localeCompare(b.mission_name)
                );
            } else if (sortObj.sort === 'date') {
                sortData = sortData.sort(function (left, right) {
                    return moment
                        .utc(left.launch_date_utc)
                        .diff(moment.utc(right.launch_date_utc));
                });
            }
            return {
                ...state,
                filteredLaunches: sortData,
                loading: false,
            };
        default:
            return state;
    }
}
