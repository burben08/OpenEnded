importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyDUQ2gWD92UrDM94_f2yNklYXBInT9cDvw",
  authDomain: "openended-f7e4e.firebaseapp.com",
  databaseURL:
    "https://openended-f7e4e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "openended-f7e4e",
  storageBucket: "openended-f7e4e.firebasestorage.app",
  messagingSenderId: "951627102719",
  appId: "1:951627102719:web:66a6e9ef612e8ad3c9cfca",
  measurementId: "G-S8P7E02CWL",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Background message received: ",
    payload,
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 fill=%22%23007bff%22/><text y=%22.9em%22 x=%22.1em%22 font-size=%2270%22>📍</text></svg>",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
