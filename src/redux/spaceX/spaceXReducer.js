import {
    SPACEX_REQUEST,
    SPACEX_SUCCCESS,
    SPACEX_ERROR,
} from "./spaceXType";

const initialState = {
    loading: false,
    data: [],
    filterData:[],
    error: ""
};

const spaceXReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SPACEX_REQUEST: return {
            ...state,
            loading: true,
        }
        case SPACEX_SUCCCESS: return {
            loading: false,
            data: action.payload,
            error: ""
        }
        case SPACEX_ERROR: return {
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}

export default spaceXReducer;