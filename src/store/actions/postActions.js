export const createPost = (post) => {
    return (dispatch, getState,{ getFirebase}) => {
        console.log(post)
        //make a call to Database
        const firestore = getFirebase().firestore();
        firestore.collection('posts').add({
            ...post,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', center: post })
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR',err})
        })
    }
}