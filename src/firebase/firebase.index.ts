import firebase from 'firebase';

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
};

initFirebase();

export { firebase };
