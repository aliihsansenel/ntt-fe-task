const initialState = {
    fetchState: 'idle',
    list: []
}

const offerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'offer/fetchSucceded': {
            const list = payload.offerList;
            
            return { ...state, fetchState: 'success' , list};
        }
        
        default:
            return state
    }
}

export default offerReducer