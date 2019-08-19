import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAx-GmwwaezfsTwwTtqmOY9uiJP5HDpWGM",
    authDomain: "expensifyappwithreact.firebaseapp.com",
    databaseURL: "https://expensifyappwithreact.firebaseio.com",
    projectId: "expensifyappwithreact",
    storageBucket: "expensifyappwithreact.appspot.com",
    messagingSenderId: "562928886131",
    appId: "1:562928886131:web:c223bdfae24ed2d8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default};