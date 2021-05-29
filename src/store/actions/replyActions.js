export const createReply = (query) => {
    return (dispatch, getState,{ getFirebase}) => {
        console.log(query)
        //make a call to Database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        firestore.collection('replies').add({
            ...query,
            createdAt: new Date(),
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
        }).then(() => {
            dispatch({ type: 'CREATE_REPLY', query })
        }).catch((err) => {
            dispatch({ type: 'CREATE_REPLY_ERROR',err})
        })
    }
};