const firebaseConfig = {
      apiKey: "AIzaSyBNlAQt0xC21R_xWEBlB1IKk2e33x5ujJ0",
      authDomain: "steady-5b76c.firebaseapp.com",
      databaseURL: "https://steady-5b76c-default-rtdb.firebaseio.com",
      projectId: "steady-5b76c",
      storageBucket: "steady-5b76c.appspot.com",
      messagingSenderId: "725577929368",
      appId: "1:725577929368:web:0fbbc46cd7cc894a63f6ed"
    };

    const app = initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
      
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}