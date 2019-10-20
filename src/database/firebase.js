import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyDMZVt7-pVPHT7UcHnWXmYKw1d_umH_MYQ',
    authDomain: 'hitthekraken.firebaseapp.com',
    databaseURL: 'https://hitthekraken.firebaseio.com',
    projectId: 'hitthekraken',
    storageBucket: 'hitthekraken.appspot.com',
    messagingSenderId: '617751868898',
    appId: '1:617751868898:web:322cf65517ea50b40935bb',
    measurementId: 'G-TJNH8ZBNL8',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// let email = 'test@test.com';
// let password = 'test';

// Log in
// firebase.auth().signInWithEmailAndPassword(email, password).then((info) => {
//     console.log('Successfully logged in');
// }).catch(function(error) {
//     console.log(error);
// });

// Create Account
// firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
//     console.log('Account created');
// }).catch(function(error) {
//     console.log(error);
// });

// Save to DB
// database.ref().set({
//     test: 'test'
// }).then(() => {
//     console.log('Saved');
// }).catch((e) => {
//     console.log('Failed: ', e);
// });
