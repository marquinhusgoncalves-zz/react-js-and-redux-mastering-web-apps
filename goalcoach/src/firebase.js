import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDWp8FUqOKJeRtsyL6zHselxqeYTqV-BAY",
  authDomain: "goalcoach-3b105.firebaseapp.com",
  databaseURL: "https://goalcoach-3b105.firebaseio.com",
  projectId: "goalcoach-3b105",
  storageBucket: "goalcoach-3b105.appspot.com",
  messagingSenderId: "271466659895"
};

export const firebaseApp = firebase.initializeApp(config);
