// Load existing users from localStorage (if any)
let userData = JSON.parse(localStorage.getItem("userData")) || [];

document.querySelector(".formSubmit").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();
  const c_password = document.getElementById("confirmPassword").value.trim();

  // Regular expressions
  const usernameRegex = /^[A-Za-z0-9]{3,20}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  const emailRegex = /^[A-Za-z0-9]+(?:[._%+-][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  // Clear previous errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  let isValid = true;

  // Username
  if (!usernameRegex.test(username)) {
    document.getElementById("usernameError").textContent = "Username is not valid";
    isValid = false;
  }

  // Password
  if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.";
    isValid = false;
  }

  // Email
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Email address is not valid";
    isValid = false;
  }

  // Phone
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must be 10 digits and start with 6, 7, 8, or 9";
    isValid = false;
  }

  // Confirm Password
  if (c_password !== password) {
    document.getElementById("confirmPasswordError").textContent = "Passwords don't match";
    isValid = false;
  }

  // If all validations passed
  if (isValid) {
    const newUser = {
      username,
      email,
      phone,
      password, // ⚠️ for demo only; don’t store real passwords like this
    };

    userData.push(newUser);
    localStorage.setItem("userData", JSON.stringify(userData)); // Save updated list

    // Clear form fields
    document.querySelectorAll(".form-control").forEach(el => (el.value = ""));

    console.log("User data saved:", userData);
    alert("Registration successful! Data saved locally.");
  }
});