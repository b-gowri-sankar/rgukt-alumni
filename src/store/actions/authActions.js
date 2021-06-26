// import { googleProvider } from "../../config/authMethods";

export const signIn = (credentials) => {
    console.log('sign in')
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: "LOGIN_ERROR", err })
        });
    }
}

export const googleSignIn = (provider) => {
    console.log('google sign in');
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const firebase = getFirebase();
        console.log(provider.providerId)
        firebase.auth().signInWithPopup(provider).then((res) => {
            let splitDisplayName = null;
            if (provider.providerId === 'github.com'){
                splitDisplayName = [res.additionalUserInfo.username, 'gitHub']
            }
            else{
                splitDisplayName = res.user.displayName.split(' ')
            }
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: splitDisplayName[0],
                lastName: splitDisplayName[1],
                initials: splitDisplayName[0][0]+splitDisplayName[1][0]
            })
        })
    }
}


export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase =getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    console.log('I am in signUp method')
    return (dispatch, getState, { getFirebase}) => {
        const firestore = getFirebase().firestore();
        const firebase = getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type:'SIGNUP_SUCCESS'})
        }).catch(err => {
            dispatch({type:'SIGNUP_ERROR',err})
        })

    }
}