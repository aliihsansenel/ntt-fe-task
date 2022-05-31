const initialState = {
    fetchState: 'idle',
    list: []
}

const offerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'offer/fetchStarted': {
            return { ...state, fetchState: 'loading' , list: [] };
        }
        case 'offer/fetchSucceded': {
            const list = payload.offerList;
            return { ...state, fetchState: 'success' , list};
        }
        case 'offer/fetchFailed': {
            return { ...state, fetchState: 'fail'};
        }
        
        default:
            return state
    }
}

export default offerReducer