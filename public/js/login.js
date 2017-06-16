$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var ownerData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!ownerData.email || !ownerData.password) {
      return;
    }
    // If we have an email and password, run the signUpOwner function
    signUpOwner(ownerData.email, ownerData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpOwner(email, password) {
    $.post("/api/owner", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

});