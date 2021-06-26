export const createQuery = (query) => {
    return (dispatch, getState,{ getFirebase}) => {
        console.log(query)
        //make a call to Database
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        console.log("this si profile data",profile)
        // const authorId = getState().firebase.auth.uid;
        firestore.collection('queries').add({
            ...query,
            createdAt: new Date(),
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
        }).then(() => {
            dispatch({ type: 'CREATE_QUERY', query })
        }).catch((err) => {
            dispatch({ type: 'CREATE_QUERY_ERROR',err})
        })
    }
};