import React from 'react';
import firebase from 'firebase';
import Drawers from './Screens/Drawers';

  export default class App extends React.Component {

    //Konfigurer applikasjonen til firebase.
    UNSAFE_componentWillMount() {
      const firebaseConfig = {
        apiKey: "AIzaSyDjZvqn3prRBcJJ5wy_J_ZbkBGmVFS8jGY",
  authDomain: "oblig3-38019.firebaseapp.com",
  databaseURL: "https://oblig3-38019.firebaseio.com",
  projectId: "oblig3-38019",
  storageBucket: "oblig3-38019.appspot.com",
  messagingSenderId: "318420955834",
  appId: "1:318420955834:web:8d43b4c8675248e1820883",
  measurementId: "G-R5LLPMQSBQ"
};
       // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
       // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
       if (firebase.apps.length ===0 ) {
       firebase.initializeApp(firebaseConfig);
       
   }
   
    }
    render(){
     // returnerer 
     return <Drawers/>
    }
   }
   