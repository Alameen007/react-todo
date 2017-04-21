import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDyZA41KOSZw22u3NzstPHwplRFQOIPmCk",
      authDomain: "al-ameen-todo-app.firebaseapp.com",
      databaseURL: "https://al-ameen-todo-app.firebaseio.com",
      projectId: "al-ameen-todo-app",
      storageBucket: "al-ameen-todo-app.appspot.com",
      messagingSenderId: "278266521904"
    };
    firebase.initializeApp(config);

} catch (e) {

}

  export var firebaseRef = firebase.database().ref();
  export default firebase;
