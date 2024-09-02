
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCD5mqFrMtuoz338wlGs9pGYxi6GRjfWrI",
    authDomain: "employe--leave-system.firebaseapp.com",
    projectId: "employe--leave-system",
    storageBucket: "employe--leave-system.appspot.com",
    messagingSenderId: "99541106195",
    appId: "1:99541106195:web:4a58de6bfdcfb58f7dc9e6",
    measurementId: "G-1D4H48FLCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;