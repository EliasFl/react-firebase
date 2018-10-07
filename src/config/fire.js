import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDrSO9zmyHVzepeAMnLvXC6ckehQec9cV4",
  authDomain: "react-login-c9af0.firebaseapp.com",
  databaseURL: "https://react-login-c9af0.firebaseio.com",
  projectId: "react-login-c9af0",
  storageBucket: "react-login-c9af0.appspot.com",
  messagingSenderId: "895903617856"
};
const fire = firebase.initializeApp(config);
export default fire;