import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore, collection, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';

const urlParams = new URLSearchParams(window.location.search);
const popParam = urlParams.get('pop');

var firebaseApp = initializeApp({
    apiKey: "AIzaSyCxv8WYM2GI2BpzhqLxt196uYHIE5ngO2g",
    authDomain: "witheredapp.firebaseapp.com",
    projectId: "witheredapp",
    storageBucket: "witheredapp.appspot.com",
    messagingSenderId: "576342134514",
    appId: "1:576342134514:web:712416304a4fdba7e5ca6b"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('[Withered Auth] Account detected');
        getData();
    } else {
        console.log('[Withered Auth] Account not detected');
    }
});

function signUp() {
    var te = document.getElementById("asi-em");
    var tp = document.getElementById("asi-pw");
    var tcp = document.getElementById("asi-cp");
    var ter = document.getElementById("ast-er");

    if (tp.value !== tcp.value) {
        ter.innerHTML = "The passwords do not match";
    } else {
        ter.innerHTML = "";
        createUserWithEmailAndPassword(auth, te.value, tp.value)
        .then((userCredential) => {
            // Signed up and logged in
            location.reload();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            ter.innerHTML = errorMessage;
        });
    }
}
window.signUp = signUp;

function logIn() {
    var te = document.getElementById("ali-em");
    var tp = document.getElementById("ali-pw");
    var ter = document.getElementById("alt-er");

    signInWithEmailAndPassword(auth, te.value, tp.value)
        .then((userCredential) => {
            ter.innerHTML = "";
            // Logged in
            location.reload();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            ter.innerHTML = errorMessage;
        });
}
window.logIn = logIn;

function logOut() {
    auth.signOut();
}
window.logOut = logOut;

function setUserDetails() {
    var duid = document.getElementById("dtlUID");
    var demail = document.getElementById("dtlEmail");
    onAuthStateChanged(auth, user => {
        if (user != null) {
            duid.innerHTML = "<strong>UID</strong> " + auth.currentUser.uid;
            demail.innerHTML = "<strong>Email</strong> " + auth.currentUser.email;
        }
    });
}
window.setUserDetails = setUserDetails;

function setPOP(pop) {
    var popDetails = document.getElementById("popDetails");
    var popLogin = document.getElementById("popLogin");
    var popSignUp = document.getElementById("popSignUp");
    onAuthStateChanged(auth, (user) => {
        if (user) {
            popDetails.style.display = "block";
            popLogin.style.display = "none";
            popSignUp.style.display = "none";
            setUserDetails();
        } else {
            if (pop === "login") {
                popDetails.style.display = "none";
                popLogin.style.display = "block";
                popSignUp.style.display = "none";
            } else if (pop === "signup") {
                popDetails.style.display = "none";
                popLogin.style.display = "none";
                popSignUp.style.display = "block";
            }
        }
    });
}
window.setPOP = setPOP;
function setInitialPOP() {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setPOP('details');
        } else {
            if (popParam === "login") {
                setPOP("login");
            } else if (popParam === "signup") {
                setPOP("signup");
            } else {
                setPOP("login");
            }
        }
    });
}
window.setInitialPOP = setInitialPOP;

async function getData() {
    const udocref = doc(db, "hostusers", auth.currentUser.uid);
    const udocsnap = await getDoc(udocref);
    var dtlsHosting = document.getElementById("dtlsHosting");
    dtlsHosting.style.display="block";
    var dtlHType = document.getElementById("dtlHType");
    if (udocsnap.exists()) {
        const data = udocsnap.data();
        var dtlHWeb = document.getElementById("dtlHWeb");
        var dtlHWPl = document.getElementById("dtlHWPl");
        var dtlHWEx = document.getElementById("dtlHWEx");
        var dtlHWPr = document.getElementById("dtlHWPr");
        var dtlHDsc = document.getElementById("dtlHDsc");
        var dtlHDPl = document.getElementById("dtlHDPl");
        var dtlHDEx = document.getElementById("dtlHDEx");
        var dtlHDPr = document.getElementById("dtlHDPr");
        if (data.type === "both") {
            dtlHType.innerHTML="<strong>Type</strong> Both";
            dtlHWeb.innerHTML="<strong>Web</strong";
            dtlHWPl.innerHTML="<strong>Plan</strong> "+data.wplan;
            dtlHWEx.innerHTML="<strong>Expires</strong> "+data.wexpires;
            dtlHWPr.innerHTML="<strong>Billing Period</strong> "+data.wperiod;
            dtlHDsc.innerHTML="<strong>Discord Bot</strong";
            dtlHDPl.innerHTML="<strong>Plan</strong> "+data.dplan;
            dtlHDEx.innerHTML="<strong>Expires</strong> "+data.dexpires;
            dtlHDPr.innerHTML="<strong>Billing Period</strong> "+data.dperiod;
        } else if (data.type === "web") {
            dtlHType.innerHTML="<strong>Type</strong> Website";
            dtlHWPl.innerHTML="<strong>Plan</strong> "+data.wplan;
            dtlHWEx.innerHTML="<strong>Expires</strong> "+data.wexpires;
            dtlHWPr.innerHTML="<strong>Billing Period</strong> "+data.wperiod;
        } else if (data.type === "dbot") {
            dtlHType.innerHTML="<strong>Type</strong> Discord Bot";
            dtlHDPl.innerHTML="<strong>Plan</strong> "+data.dplan;
            dtlHDEx.innerHTML="<strong>Expires</strong> "+data.dexpires;
            dtlHDPr.innerHTML="<strong>Billing Period</strong> "+data.dperiod;
        }
    } else {
        console.log("Error: User's data does not exist. Probably not subscriber.");
        dtlHType.innerHTML="<strong>Type</strong> None";
    }
}
window.getData = getData;