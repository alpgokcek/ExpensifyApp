import {firebase, googleAuthProvider} from "../firebase/firebase";

export const login =(uid,email) => {
    return{type: 'LOGIN', uid, email};
};

export const startLogin = () => {
  return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider);
      //dispatch(login(firebase.auth().currentUser.uid))

  }
};

export const logout =() => {
    return{type: 'LOGOUT'};
};

export const startLogout = () => {
  return () => {
      return firebase.auth().signOut();
  }
};