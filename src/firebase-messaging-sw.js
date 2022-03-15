importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyDD3YHcjyxqdQ5gu6lPhdgGrINLe_B-mHQ",
  authDomain: "test-notification-be682.firebaseapp.com",
  projectId: "test-notification-be682",
  storageBucket: "test-notification-be682.appspot.com",
  messagingSenderId: "354436930870",
  appId: "1:354436930870:web:9a23e9ee63c21553356797"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);
