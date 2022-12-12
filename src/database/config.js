import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDv32KvRu7GmIm-4uJ4w6nBeroDXWOE7mk",
    authDomain: "photowall-7d20c.firebaseapp.com",
    databaseURL: "https://photowall-7d20c-default-rtdb.firebaseio.com",
    projectId: "photowall-7d20c",
    storageBucket: "photowall-7d20c.appspot.com",
    messagingSenderId: "205726593302",
    appId: "1:205726593302:web:4d6f5e44eadb88ff196037",
    measurementId: "G-THCZM4R9KT"
};

const firebaseApp = initializeApp(firebaseConfig)

const database = getDatabase(firebaseApp)

export { database }