const initState={
}

 const queryReducer = (state=initState,action) =>{
    switch (action.type) {
        case 'CREATE_REPLY':
            console.log('created reply', action.query);
            return state;
        case 'CREATE_REPLY_ERROR':
            console.log("create reply error", action.err);
            return state;
        default:
            return state
    }
}

export default queryReducer;