import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCEAkJ9nlDUvBkDl4HnZ7C2db33CIIyv9w",
    authDomain: "c-77-3711e.firebaseapp.com",
    projectId: "c-77-3711e",
    storageBucket: "c-77-3711e.appspot.com",
    messagingSenderId: "263535254340",
    appId: "1:263535254340:web:4bbbf1434159779497d511"
  };

  

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore(); 
  