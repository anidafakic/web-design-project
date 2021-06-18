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
      "Uneto ime i prezime mora zadovoljavati uslove: početno slovo mora biti veliko i morate upisati i  ime i prezime sa razmakom između";
  } else {
    document.getElementById("name-error").innerHTML = "";
  }

  if (isEmailValid === false) {
    document.getElementById("email-error").innerHTML =
      "Uneti email mora biti ispravan";
  } else {
    document.getElementById("email-error").innerHTML = "";
  }

  if (isMessageValid === false) {
    document.getElementById("message-error").innerHTML =
      "Uneta poruka mora biti ispravna i sadrzati alfanumericke simbole i znakove interpukcije";
  } else {
    document.getElementById("message-error").innerHTML = "";
  }

  if (isNameValid && isEmailValid && isMessageValid) {
    // posalji email
    alert("Poruka je uspešno poslata!");
  }
});
