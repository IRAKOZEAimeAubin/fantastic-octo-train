import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs  } from "firebase/firestore";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
// import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseApp = initializeApp( {
    apiKey: "AIzaSyAEpQyit8f5rvrWYj9OQ0FfLRC-c_S0ido",
    authDomain: "firebasics-1a9c5.firebaseapp.com",
    projectId: "firebasics-1a9c5",
    storageBucket: "firebasics-1a9c5.appspot.com",
    messagingSenderId: "308030074827",
    appId: "1:308030074827:web:bbe56a721c6560c6a5104e",
    measurementId: "G-W77515JFD2"
} );

const auth = getAuth( firebaseApp );
const db = getFirestore( firebaseApp );

// onAuthStateChanged( auth, user => {
//     if ( user != null ) {
//         console.log( 'Logged in!' );
//     } else {
//         console.log( 'No user!' );
//     }
// } );

if ( document.getElementById( 'register-btn' ) ) {
    document.getElementById( 'register-btn' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
        const email = document.getElementById( 'email' ).value;
        const password = document.getElementById( 'password' ).value;

        createUserWithEmailAndPassword( auth, email, password )
            .then( ( res ) => {
                console.log( res.user );
            } )
            .catch( ( err ) => {
                console.log( err.code );
                console.log( err.message );
            })
    })
}

if ( document.getElementById( 'login-btn' ) ) {
    document.getElementById( 'login-btn' ).addEventListener( 'click', ( e ) => {
        e.preventDefault();
        const email = document.getElementById( 'email' ).value;
        const password = document.getElementById( 'password' ).value;

        signInWithEmailAndPassword( auth, email, password )
            .then( ( res ) => {
                console.log( res.user );
            } )
            .catch( ( err ) => {
                console.log( err.code );
                console.log( err.message );
            } );
    } );
}

if ( document.getElementById( 'create-btn' ) ) {
    document.getElementById( 'create-btn' ).addEventListener( 'click', async ( e ) => {
        e.preventDefault();

        try {
            const res = await addDoc( collection( db, 'todos' ), {
                title: document.getElementById( 'title' ).value,
                body: document.getElementById( 'body' ).value
            } );
            console.log( "Document written with ID: ", res.id );
        } catch (error) {
            console.error( "Error adding document: ", error );
        }
    } );
}