import reBase from "re-base";
import firebase from "firebase/app";
require('firebase/database')

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCFinw6mJJ4TA7cBQH7ymfacd260ipF3ZU",
  authDomain: "ildus-burgers.firebaseapp.com",
  databaseURL: "https://ildus-burgers-default-rtdb.firebaseio.com",
});

const base = reBase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;