import { initializeApp, getApps }from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apikey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authdomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectid: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
};
        
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;