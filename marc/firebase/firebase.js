import * as firebase from 'firebase';
import 'firebase/firestore';

try {
    const firebaseConfig = {
      //  your config info
      };
  
  firebase.initializeApp(firebaseConfig);
  
} catch (error) {
  console.log(error)
}

export default firebase;