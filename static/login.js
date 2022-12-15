import "./DB.js";

const users = JSON.parse(localStorage.getItem("users"));
const loginButton = document.getElementById("login_btn");
loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("login_email").value;
  const password = document.getElementById("login_password").value;
  const loggedInUser = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!loggedInUser) {
    // not logged in
    alert("Wrong email or password");
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
  window.location.replace("search_page.html");
});
