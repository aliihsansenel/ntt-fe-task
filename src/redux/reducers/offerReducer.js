const initialState = {
    count: -1,
    fetchState: 'idle',
    list: []
}

const offerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'offer/fetchStarted': {
            if (state.count === -1)
                return { ...state, fetchState: 'loading' , list: [] };
            return { ...state, fetchState: 'loading' };
        }
        case 'offer/fetchSucceded': {
            if (payload.hasOwnProperty('num_offers')) {
                return { ...state, fetchState: 'success', count: payload.num_offers};
            }
            const offer = payload;
            return { ...state, fetchState: 'success' , list: [...state.list, offer] };
        }
        case 'offer/fetchFailed': {
            return { ...state, fetchState: 'fail', count: -1 };
        }
        
        default:
            return state
    }
}

export default offerReducer