  import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyDRSxu1qZKaUpcq-srrZ4eA42Yb4f3gs54",
    authDomain: "goalcoach-db418.firebaseapp.com",
    databaseURL: "https://goalcoach-db418.firebaseio.com",
    projectId: "goalcoach-db418",
    storageBucket: "goalcoach-db418.appspot.com",
    messagingSenderId: "391164376553"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');