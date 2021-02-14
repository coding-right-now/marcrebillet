import firebase from '../firebase/firebase'

export function login(email, password, loginComplete){
    // const user = { 'email' : email, 'password' : password}

    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=> loginComplete())
        .catch((error) => console.log("error : ", error))


        console.log("Emal", email)
        console.log("Password", password)
}

export function signUp(email, password, signUpComplete) {

    firebase.auth()
        .createUserWithEmailAndPassword(email,password)
        .then(()=> login(email, password, signUpComplete))
        .catch((error) => console.log("error : ", error))

        console.log("Signup Emal", email)
        console.log("Signup Password", password)
}

export function signOut(signedOut){
    firebase.auth().signOut().then(()=> signedOut)
}


export function subscribeToAuth(authStateChanged){

    firebase.auth()
        .onAuthStateChanged((user) => {
            authStateChanged(user)
        })
}