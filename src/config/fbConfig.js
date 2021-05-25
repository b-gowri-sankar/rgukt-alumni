import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

export const firebaseConfig = {
    apiKey: "AIzaSyDD5LtpXUyhiIFyCG5aY5FkvuCdvu4Lzj8",
    authDomain: "rgukt-alumni.firebaseapp.com",
    projectId: "rgukt-alumni",
    storageBucket: "rgukt-alumni.appspot.com",
    messagingSenderId: "948012823600",
    appId: "1:948012823600:web:b499d7f0a7ab27930ea9f5",
    measurementId: "G-6HD6WYSB8V"
};
  
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true })
export const fire = firebase.firestore();
export const storage = firebase.storage();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default firebase;