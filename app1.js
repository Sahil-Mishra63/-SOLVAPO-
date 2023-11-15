import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";

const firebaseConfig = {
apiKey: "AIzaSyBSW_SILWdE_0ziAA47el7YEILFWjtns1o",
authDomain: "ru-medic.firebaseapp.com",
databaseURL: "https://ru-medic-default-rtdb.firebaseio.com",
projectId: "ru-medic",
storageBucket: "ru-medic.appspot.com",
messagingSenderId: "749329210449",
appId: "1:749329210449:web:53a283fbd2c945cc01ec70",
measurementId: "G-PTXPJK4NDQ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, get, set, child, update, remove }
from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const db = getDatabase();
const dberef = ref(db);
get(child(dberef, "ChildDoctors")).then((snpshot) => {
    snpshot.forEach(function (item) {
        console.log(item);
    })})