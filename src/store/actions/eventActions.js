export const createEvent = (event) => {
    return (dispatch, getState,{ getFirebase}) => {
        console.log(event)
        //make a call to Database
        const firestore = getFirebase().firestore();
        firestore.collection('events').add({
            ...event,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_EVENT', event: event })
        }).catch((err) => {
            dispatch({ type: 'CREATE_EVENT_ERROR',err})
        })
    }
}