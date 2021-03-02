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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase
