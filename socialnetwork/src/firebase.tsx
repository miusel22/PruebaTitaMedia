
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZtZArddLTTlMVx1o_d02wEIiE3T4ZH_0",
    authDomain: "auth-react-29fc9.firebaseapp.com",
    projectId: "auth-react-29fc9",
    storageBucket: "auth-react-29fc9.appspot.com",
    messagingSenderId: "376594591029",
    appId: "1:376594591029:web:eb5e33885a9ccb65ab707c",
    measurementId: "G-TZE0N7G34D"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };