import * as firebase from 'firebase';

// Initialize Firebase

    firebase.initializeApp({
         //initialize here
          });

          // Initialize Cloud Firestore through Firebase
          var db = firebase.firestore();
          
          // Disable deprecated features
          db.settings({
            timestampsInSnapshots: true
          });

  export default firebase;


