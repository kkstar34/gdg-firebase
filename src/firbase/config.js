import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ1_-fUiTTciV0aaCsztobm3c5oDq9LX4",
    authDomain: "gdg-ws.firebaseapp.com",
    projectId: "gdg-ws",
    storageBucket: "gdg-ws.appspot.com",
    messagingSenderId: "572467590141",
    appId: "1:572467590141:web:a9ed47197f064b239cdf94"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;