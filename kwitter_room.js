
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
      apiKey: "AIzaSyBP6hDm-NovTKVi42GecBT7R1EdLKQnuI4",
      authDomain: "kwitter-f06a6.firebaseapp.com",
      databaseURL: "https://kwitter-f06a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-f06a6",
      storageBucket: "kwitter-f06a6.appspot.com",
      messagingSenderId: "774900860377",
      appId: "1:774900860377:web:148f25b1bcac3e66d4c5c8"
    };
    


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
