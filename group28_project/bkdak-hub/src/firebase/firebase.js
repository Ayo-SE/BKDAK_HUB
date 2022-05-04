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
            apiKey: "AIzaSyCraBqEgHuFgOEVmgwd3zARxD24kijWxtg",
            authDomain: "true-hub.firebaseapp.com",
            projectId: "true-hub",
            storageBucket: "true-hub.appspot.com",
            messagingSenderId: "15724732298",
            appId: "1:15724732298:web:dc7bd89913434f59c47273",
            measurementId: "G-QWBKYWTBX7"
        });
        this.db = this.firebase.firestore();
        this.auth = this.firebase.auth();
    }
}

export default Firebase;