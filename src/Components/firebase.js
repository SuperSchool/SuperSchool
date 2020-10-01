import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCN38e44FiIpTUon90B0zd6TIhIMi__3Eo",
    authDomain: "superschool-32148.firebaseapp.com",
    databaseURL: "https://superschool-32148.firebaseio.com",
    projectId: "superschool-32148",
    storageBucket: "superschool-32148.appspot.com",
    messagingSenderId: "606463809844",
    appId: "1:606463809844:web:58c8af84e37df8ea22ad61",
    measurementId: "G-VSHR4TXDRZ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export default firebase;