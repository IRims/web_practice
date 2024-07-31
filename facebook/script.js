// Add an event listener to the login button
document.getElementById("login").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the username and password input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username and password match the criteria
  if (username === "admin" && password === "1122") {
    alert("Login successful!"); // Replace with your desired action upon successful login
  } else {
    alert("Login failed. Please check your credentials."); // Replace with your desired action upon login failure
  }
});
