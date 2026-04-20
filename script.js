import { initializeApp } from "https://gstatic.com";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://gstatic.com";

const firebaseConfig = {
  apiKey: "AIzaSyByF5ZyNadDOp8fKUA_5l17z-YRulsmX-o",
  authDomain: "://firebaseapp.com",
  projectId: "login-test-1e765",
  storageBucket: "login-test-1e765.firebasestorage.app",
  messagingSenderId: "731488888623",
  appId: "1:731488888623:web:0e59c94d355b55643ea3da",
  measurementId: "G-01LVNQWGJ9"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Switch between forms
window.toggleForm = () => {
    const signup = document.getElementById('signup-form');
    const login = document.getElementById('login-form');
    if (signup.style.display === "none") {
        signup.style.display = "block";
        login.style.display = "none";
    } else {
        signup.style.display = "none";
        login.style.display = "block";
    }
};

// Signup Logic
window.signup = () => {
    const email = document.getElementById('signup-email').value;
    const pass = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;

    if (!email.includes("@gmail.com")) return alert("Only Gmail addresses allowed.");
    if (pass !== confirm) return alert("Passwords do not match!");

    createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
            alert("Account created safely!");
            window.toggleForm();
        })
        .catch(err => alert(err.message));
};

// Login Logic
window.login = () => {
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, pass)
        .then(user => alert("Welcome: " + user.user.email))
        .catch(err => alert(err.message));
};

// Google Login Logic
window.googleLogin = () => {
    signInWithPopup(auth, provider)
        .then(result => alert("Google Login Success: " + result.user.displayName))
        .catch(err => alert(err.message));
};
