$(document).ready(function() {
  // Getting references to our form and inputs
  var submitForm = $("form.signUp");
  var emailInput = $("#newEmail");
  var passwordInput = $("#newPassword");

  //code to submit new user to database
  //=================================================================
  //=================================================================
  // When the form is submitted, we validate there's an email and password entered
  $(document).on("submit", "#signUp", createOwner);

  function createOwner(event) {
    event.preventDefault();

    var ownerData = {

      email: emailInput.val().trim(),
      password: passwordInput.val().trim()

    };

    if (!ownerData.email || !ownerData.password) {
      return;
    };

    // If we have an email and password we run the loginUser function and clear the form
    $.post("/api/owner", ownerData, function(){

      emailInput.val("");
      passwordInput.val("");
    });
  }
  
});

