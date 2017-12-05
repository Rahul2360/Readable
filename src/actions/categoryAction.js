import * as API from '../api'
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

// In this there is only one action i.e. we are taking category from the user or from the server
// Then it is pass to the reducer so that if any change occur in the category it shouls update on the store
const receiveCategories = (categories) => {
    return {
        type:RECEIVE_CATEGORIES,
        categories
    };
}

export const getCategories = () => (dispatch) => {
    API.getCategories().then(({categories}) => {
        dispatch(receiveCategories(categories))
    })
}
