const { default: offerFetcher, offerCountFetcher } = require("fetchers/offerFetcher")


export const loadOffers = (path) => async (dispatch, getState) => {
    dispatch({ type: 'offer/fetchStarted' });
    const response = await offerFetcher(path);
    
    if (response.success)
        dispatch({ type: 'offer/fetchSucceded', payload: response });
    else
        dispatch({ type: 'offer/fetchFailed', payload: response });
}

export const getOfferCount = () => async (dispatch, getState) => {
    dispatch({ type: 'offer/fetchStarted' });
    const response = await offerFetcher('get_offer_count');
    
    if (response.success)
        dispatch({ type: 'offer/fetchSucceded', payload: response });
    else
        dispatch({ type: 'offer/fetchFailed', payload: response });
}