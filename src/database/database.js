import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

export const logIn = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            console.error(error);
        });
};

export const logOut = () => firebase.auth().signOut();

export const onAuthStateChanged = callback =>
    firebase.auth().onAuthStateChanged(callback);
