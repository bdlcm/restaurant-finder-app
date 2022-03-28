import firebase from "firebase/app";
import "firebase/auth";

export const loginRequest = (email, password) =>
  // firebase.auth().signInWithEmailAndPassword("bmoah@gmail.com", "test123");
  firebase.auth().signInWithEmailAndPassword(email, password);

export const registrationRequest = (email, password) =>
  // firebase.auth().signInWithEmailAndPassword("bmoah@gmail.com", "test123");
  firebase.auth().createUserWithEmailAndPassword(email, password);

 