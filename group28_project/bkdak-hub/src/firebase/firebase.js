import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class Firebase {
    static singleton;
    static instance(){
        if (!Firebase.singleton) {
            Firebase.singleton = new Firebase();
        }
        return Firebase.singleton;
    }
    constructor(){
        this.firebase = firebase.initializeApp({
            apiKey: "AIzaSyCYUm2cMWJNjiiHtxC-k_e9_BnZMa0El_g",
            authDomain: "bkdak-hub-30d48.firebaseapp.com",
            projectId: "bkdak-hub-30d48",
            storageBucket: "bkdak-hub-30d48.appspot.com",
            messagingSenderId: "140974071622",
            appId: "1:140974071622:web:bec87532a73273a159cf47",
            measurementId: "G-3MM5KMHQ0V"
        });
        this.db = this.firebase.firestore();
        this.auth = this.firebase.auth();
    }
}

export default Firebase;