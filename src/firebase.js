import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyB4i9DiJ8fufPRtVpc4okKOEPF5eYqchak",
    authDomain: "vue-fire-7df96.firebaseapp.com",
    databaseURL: "https://vue-fire-7df96.firebaseio.com",
    projectId: "vue-fire-7df96",
    storageBucket: "",
    messagingSenderId: "167452352552"
});


export const db = app.database();
export const namesRef = db.ref('names');

