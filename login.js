import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword ,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdLGpAFaziFqs9m1SkiWhhFSGHgdJQZ2c",
  authDomain: "user-97370.firebaseapp.com",
  projectId: "user-97370",
  storageBucket: "user-97370.firebasestorage.app",
  messagingSenderId: "473219438898",
  appId: "1:473219438898:web:3eb7014f94651dc19c1f2b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href= "music1.html";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("User doesn't exist");
      // ..
    });
});
