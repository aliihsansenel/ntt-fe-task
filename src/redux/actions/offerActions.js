const { default: offerFetcher } = require("fetchers/offerFetcher")


export const loadOffers = (path) => async (dispatch, getState) => {
    const response = await offerFetcher(path);
    
    if (response.success)
        dispatch({ type: 'offer/fetchSucceded', payload: response });
    else
        dispatch({ type: 'offer/fetchFailed', payload: response });
}