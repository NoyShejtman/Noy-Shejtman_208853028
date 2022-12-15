import "./DB.js";

const users = JSON.parse(localStorage.getItem("users"));

const registerButton = document.getElementById("register_btn");
registerButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const age = parseInt(document.getElementById("age").value);
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("repeat-password").value;

  if (password !== repeatPassword) {
    alert("Passwords do not match");
    return;
  }

  const newUser = {
    email,
    age,
    password,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // window.location.replace("search_page.html");
});
