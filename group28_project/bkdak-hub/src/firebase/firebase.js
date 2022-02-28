// // import firebase from "firebase";
// // import 'firebase/auth'
// // import 'firebase/firestore'
// import firebase from "firebase";
// import 'firebase/auth';
// import 'firebase/firestore'

// class Firebase{
//     static singleton;
//     static instance(){
//         if (!Firebase.singleton) {
//             Firebase.singleton = new Firebase();
//         }
//         return Firebase.singleton;
//     }
//     constructor(){
//         this.firebase = firebase.initializeApp({
//             apiKey: "AIzaSyAI0QBUmo-aEUA_uOL7SP0lbZrZvMuy1Jo",
//             authDomain: "bkdak-hub.firebaseapp.com",
//             projectId: "bkdak-hub",
//             storageBucket: "bkdak-hub.appspot.com",
//             messagingSenderId: "60124151834",
//             appId: "1:60124151834:web:b6beed1e0e4a0ce41f91a3",
//             measurementId: "G-PT4HYTRF8Z"
//         });
//         this.db = this.firebase.firestore();
//         this.auth = this.firebase.auth();
//     }
// }

// export default Firebase;