export const createCenter = (project) => {
    return (dispatch, getState,{ getFirebase}) => {
        // console.log(project)
        //make a call to Database
        const firestore = getFirebase().firestore();
        firestore.collection('centers').add({
            ...project,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_CENTER', center: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_CENTER_ERROR',err})
        })
    }
};