
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyATrHPczICXxt3YL96QbWtebs-nxyC7OmM",
    authDomain: "kwitterpractiveacv.firebaseapp.com",
    databaseURL: "https://kwitterpractiveacv-default-rtdb.firebaseio.com",
    projectId: "kwitterpractiveacv",
    storageBucket: "kwitterpractiveacv.appspot.com",
    messagingSenderId: "110850022336",
    appId: "1:110850022336:web:aeec22dbea6dcb837f8625"
  };

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }