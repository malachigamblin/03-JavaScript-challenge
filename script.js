// Assignment code here
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function () {
  // Prompt for password length
  let length = parseInt(prompt("Enter password length (8-128 characters):"));
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("Password length must be between 8 and 128 characters. Enter password length:"));
  }
})