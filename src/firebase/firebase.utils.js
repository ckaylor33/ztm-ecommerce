import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCGTqFF1gaoIux7lgvksoc5AT2DDDn6CsM',
  authDomain: 'ecom-db-19621.firebaseapp.com',
  projectId: 'ecom-db-19621',
  storageBucket: 'ecom-db-19621.appspot.com',
  messagingSenderId: '354605929340',
  appId: '1:354605929340:web:9cc571d6f7e2124a3e4af9',
  measurementId: 'G-EZ1D9XJC71',
}

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase
