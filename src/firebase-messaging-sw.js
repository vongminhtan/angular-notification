importScripts('https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.8/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDdaps3NOnIEY9sFRsOQKHi0OEORCNVtu0",
  authDomain: "notification-4af71.firebaseapp.com",
  databaseURL: "https://notification-4af71.firebaseio.com",
  projectId: "notification-4af71",
  storageBucket: "notification-4af71.appspot.com",
  messagingSenderId: "514064472769",
  appId: "1:514064472769:web:0fd9285961027348b7d240"
};

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

console.log('app', app);
console.log('messaging', messaging);
