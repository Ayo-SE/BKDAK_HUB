import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

class Firebase{
    static singleton;
    static instance(){
        if (!Firebase.singleton) {
            Firebase.singleton = new Firebase();
        }
        return Firebase.singleton;
    }
    constructor(){
        this.firebase = firebase.initializeApp({
            apiKey: "AIzaSyCNo5hbkqAhbFsjMh5oiwftbGTp3Wb16Zo",
            authDomain: "the-hub-e587b.firebaseapp.com",
            projectId: "the-hub-e587b",
            storageBucket: "the-hub-e587b.appspot.com",
            messagingSenderId: "688654399243",
            appId: "1:688654399243:web:f2afe871e9ad9a3d85540e",
            measurementId: "G-CC77Q0KXYZ"
        });
        this.db = this.firebase.firestore();
        this.auth = this.firebase.auth();
    }
}

export default Firebase;