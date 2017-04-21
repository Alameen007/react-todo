import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDyZA41KOSZw22u3NzstPHwplRFQOIPmCk",
    authDomain: "al-ameen-todo-app.firebaseapp.com",
    databaseURL: "https://al-ameen-todo-app.firebaseio.com",
    projectId: "al-ameen-todo-app",
    storageBucket: "al-ameen-todo-app.appspot.com",
    messagingSenderId: "278266521904"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Todo App',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Al-ameen',
      age: 25
    }
  });

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
  });

  todosRef.push({
    text: 'Todo 1'
  });

  todosRef.push({
    text: 'Todo 2'
  });
