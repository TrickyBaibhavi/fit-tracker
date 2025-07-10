function toggleForm(formType) {
  const signUpForm = document.getElementById("signUpForm");
  const signInForm = document.getElementById("signInForm");

  if (formType === "signIn") {
    signUpForm.classList.add("hidden");
    signInForm.classList.remove("hidden");
  } else {
    signUpForm.classList.remove("hidden");
    signInForm.classList.add("hidden");
  }
}

// Redirect to dashboard on sign in or sign up
document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.querySelector("#signInForm button");
  const signUpBtn = document.querySelector("#signUpForm button");

  signInBtn.addEventListener("click", function () {
    window.location.href = "dashboard.html"; // Make sure dashboard.html exists
  });

  signUpBtn.addEventListener("click", function () {
    window.location.href = "dashboard.html"; // Same here
  });
});
