import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyC0mJmwUXCveuUVbzI_K_5XErJSNPHwsqI',
  authDomain: 'hnltcs.firebaseapp.com',
  projectId: 'hnltcs',
  storageBucket: 'hnltcs.appspot.com',
  messagingSenderId: '876498632093',
  appId: '1:876498632093:web:f1a2c1a4f62c668a45c374',
  measurementId: 'G-3FYGW1C0J9',
  databaseURL: 'hnltcs.firebaseapp.com'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default db
