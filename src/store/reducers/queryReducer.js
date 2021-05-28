const initState={
}

 const queryReducer = (state=initState,action) =>{
    switch (action.type) {
        case 'CREATE_QUERY':
            console.log('created project', action.query);
            return state;
        case 'CREATE_QUERY_ERROR':
            console.log("create project error", action.err);
            return state;
        default:
            return state
    }
}

export default queryReducer;