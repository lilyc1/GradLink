//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCYcqUjXEP4fgnoRJLZRvp9tJna5W0fEA",
  authDomain: "gradlink-4e129.firebaseapp.com",
  databaseURL: "https://gradlink-4e129-default-rtdb.firebaseio.com",
  projectId: "gradlink-4e129",
  storageBucket: "gradlink-4e129.firebasestorage.app",
  messagingSenderId: "734268715525",
  appId: "1:734268715525:web:8794ecd62b11a2699da26c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Reference to Realtime Database
const database = firebase.database(app);

//form submission
document.getElementById("signup-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Store data in database
  const usersRef = firebase.database().ref('users');
  const newUserRef = usersRef.push(); // Use push to create a new unique ID
  newUserRef.set({
    name: name,
    email: email,
    password: password
  })
  .then(() => {
    console.log("User data saved!");
    alert("Sign up successful!");
  })
  .catch((error) => {
    console.error("Error saving data:", error);
    alert("Error: " + error.message);
  });
});
