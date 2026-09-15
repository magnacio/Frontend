// auth.js
// This file has all the JavaScript for register.html, login.html and dashboard.html
// It just uses localStorage to save data in the browser (no real server/database)

// ---------- REGISTER PAGE ----------
function registerUser() {
  // get values from input boxes
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // simple check that nothing is empty
  if (username == "" || email == "" || password == "") {
    document.getElementById("msg").innerHTML = "Please fill all fields";
    return;
  }

  // get existing users from localStorage
  // if nothing saved yet, start with an empty array
  var users = localStorage.getItem("users");
  if (users == null) {
    users = [];
  } else {
    users = JSON.parse(users);
  }

  // check if username already used
  var found = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == username) {
      found = true;
    }
  }

  if (found == true) {
    document.getElementById("msg").innerHTML = "Username already exists";
    return;
  }

  // add new user to the array
  var newUser = {
    username: username,
    email: email,
    password: password
  };
  users.push(newUser);

  // save array back to localStorage (must convert to string)
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully! Now please login.");
  window.location.href = "login.html";
}

// ---------- LOGIN PAGE ----------
function loginUser() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username == "" || password == "") {
    document.getElementById("msg").innerHTML = "Please fill all fields";
    return;
  }

  // get the users list we saved earlier in register.html
  var users = localStorage.getItem("users");
  if (users == null) {
    document.getElementById("msg").innerHTML = "No users registered yet";
    return;
  }
  users = JSON.parse(users);

  // loop through users and check for a match
  var loginSuccess = false;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username == username && users[i].password == password) {
      loginSuccess = true;
    }
  }

  if (loginSuccess == true) {
    // remember who is logged in
    localStorage.setItem("loggedInUser", username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerHTML = "Wrong username or password";
  }
}

// ---------- DASHBOARD PAGE ----------
function loadDashboard() {
  // check who is logged in
  var loggedInUser = localStorage.getItem("loggedInUser");

  if (loggedInUser == null) {
    // nobody logged in, send back to login page
    window.location.href = "login.html";
    return;
  }

  document.getElementById("welcome").innerHTML = "Welcome, " + loggedInUser;

  // get all users and show them in the table
  var users = localStorage.getItem("users");
  if (users != null) {
    users = JSON.parse(users);

    var table = document.getElementById("userTable");

    for (var i = 0; i < users.length; i++) {
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      cell1.innerHTML = users[i].username;
      cell2.innerHTML = users[i].email;
    }
  }
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
