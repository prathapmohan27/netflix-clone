import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDxhpmeH13PTcjnZh8D8OMcfb1STE3XbzA',
  authDomain: 'netflix-clone-ff2d9.firebaseapp.com',
  projectId: 'netflix-clone-ff2d9',
  storageBucket: 'netflix-clone-ff2d9.appspot.com',
  messagingSenderId: '225059415534',
  appId: '1:225059415534:web:efec58ad69d724673f9aff',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginNetflix = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createAccount = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const logOut = async () => {
  await signOut(auth);
};
