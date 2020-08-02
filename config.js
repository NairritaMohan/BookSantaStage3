import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBLrP6mUxix27QN4cKDUdkH72NBblZ2D9Q",
  authDomain: "bookdonor-79509.firebaseapp.com",
  databaseURL: "https://bookdonor-79509.firebaseio.com",
  projectId: "bookdonor-79509",
  storageBucket: "bookdonor-79509.appspot.com",
  messagingSenderId: "152076015307",
  appId: "1:152076015307:web:e26990e82b06867e816d4e",
  measurementId: "G-WQMKHGNTEC"
};
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

export default firebase.firestore();
