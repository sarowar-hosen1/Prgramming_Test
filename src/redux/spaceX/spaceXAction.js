import {
    SPACEX_REQUEST,
    SPACEX_SUCCCESS,
    SPACEX_ERROR
} from "./spaceXType";

export const spaceXRequest = () => {
    return {
        type: SPACEX_REQUEST
    }
}

export const spaceXSuccess = (data) => {
    return {
        type: SPACEX_SUCCCESS,
        payload: data
    }
}

export const spaceXError = (error) => {
    return {
        type: SPACEX_ERROR,
        payload: error,
    }
}
