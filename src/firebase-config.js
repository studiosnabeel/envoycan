import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDi9AEyHHUW928odeX7xaryqF02YXNf9Yc',
  authDomain: 'envoycan-af1b2.firebaseapp.com',
  projectId: 'envoycan-af1b2',
  storageBucket: 'envoycan-af1b2.appspot.com',
  messagingSenderId: '74893143696',
  appId: '1:74893143696:web:4e09f29f281df1df33b215',
  measurementId: 'G-QCRZ1QT8Z3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
