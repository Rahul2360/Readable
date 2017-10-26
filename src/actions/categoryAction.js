import * as API from '../api'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const receiveCategories = (categories) => {
    return {
        type:RECEIVE_CATEGORIES,
        categories
    }
}

export const getCategories = () => (dispatch) => {
    API.getCategories().then((data) =>{
        dispatch(receiveCategories(data))
    })
}
