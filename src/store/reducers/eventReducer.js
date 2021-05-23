const initState = {
    
}
const eventReducer = (state=initState, action) => {
    switch (action.type) {
        case 'CREATE_EVENT':
            return state;
        case 'CREATE_EVENT_ERROR':
            return state;
        default:
            return state;
    }
}

export default eventReducer;