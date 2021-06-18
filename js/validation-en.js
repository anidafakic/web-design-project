document.getElementById("submit").addEventListener("click", function () {
  var name, email, message;
  var nameValidation, emailValidation, messageValidation;
  var isNameValid, isEmailValid, isMessageValid;

  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;

  emailValidation = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  nameValidation = new RegExp(/^[A-Z]{1}[a-z]{1,30} [A-Z]{1}[a-z]{1,30}$/g);
  messageValidation = new RegExp(/^[a-zA-Z0-9~!@#$%^&*();':,.? ]{1,255}$/g);

  isNameValid = nameValidation.test(name); // true ili false
  isEmailValid = emailValidation.test(email);
  isMessageValid = messageValidation.test(message);

  if (isNameValid === false) {
    document.getElementById("name-error").innerHTML =
      "The entered name and surname must meet the conditions: the initial letter must be capitalized and you must enter both the name and the surname with a space between";
  } else {
    document.getElementById("name-error").innerHTML = "";
  }

  if (isEmailValid === false) {
    document.getElementById("email-error").innerHTML =
      "The email you entered must be valid";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (isMessageValid === false) {
    document.getElementById("message-error").innerHTML =
      "The entered message must be corrected and contain alphanumeric symbols and punctuation marks";
  } else {
    document.getElementById("message-error").innerHTML = "";
  }

  if (isNameValid && isEmailValid && isMessageValid) {
    // posalji email
    alert("The message was sent successfully!");
  }
});
