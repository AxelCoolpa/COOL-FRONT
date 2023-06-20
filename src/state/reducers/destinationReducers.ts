

export const FETCH_DESTINATIONS = 'FETCH_DESTINATIONS';

const initialState = {
    destinations: [],
}

const destinationReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch(action.type){
        case FETCH_DESTINATIONS:
            return { ...state, destinations: action.payload };
            default:
                return state;
    }
}

export default destinationReducer;