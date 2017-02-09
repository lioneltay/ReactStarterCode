import { firebaseAuth } from 'config/constants'
import { fetchUser } from 'helpers/api'

// Register user in database using firebase, returns promise for chaining
export function registerUser(email, password) {
	return firebaseAuth().createUserWithEmailAndPassword(email, password)
		.then(({ uid }) => uid)
}

export function signout() {
	return firebaseAuth().signOut()
		.catch(error => console.warn(error))
}

export function signin(email, password) {
	return firebaseAuth().signInWithEmailAndPassword(email, password)
		.then(({ uid }) => fetchUser(uid))
}