// Assignment code here
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", function () {
  // Prompt for password length
  let length = parseInt(prompt("Enter password length (8-128 characters):"));
  while (length < 8 || length > 128 || isNaN(length)) {
    length = parseInt(prompt("Password length must be between 8 and 128 characters. Enter password length:"));
  }

  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumbers = confirm("Include numbers?");
  let includeSpecial = confirm("Include special characters?");


while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
  alert("You must select at least one character type. Please try again.");
  includeLowercase = confirm("Include lowercase letters?");
  includeUppercase = confirm("Include uppercase letters?");
  includeNumbers = confirm("Include numbers?");
  includeSpecial = confirm("Include special characters?");
}
})