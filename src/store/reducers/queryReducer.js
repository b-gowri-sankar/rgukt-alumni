const initState={
}

 const queryReducer = (state=initState,action) =>{
    switch (action.type) {
        case 'CREATE_QUERY':
            console.log('created query', action.query);
            return state;
        case 'CREATE_QUERY_ERROR':
            console.log("create query error", action.err);
            return state;
        default:
            return state
    }
}

export default queryReducer;