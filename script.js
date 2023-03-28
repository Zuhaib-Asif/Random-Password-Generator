const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const specialSet = "~!@#$%^&*()_+";
const passOutput = document.getElementById("pass-output");
const passLength = document.getElementById("pass-len");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const special = document.getElementById("special");
const btn = document.getElementById("btn");

function randomdata(dataset) {
  return dataset[Math.floor(Math.random() * dataset.length)];
}
function generatepassword(password = "") {
  if (upper.checked) {
    password += randomdata(upperSet);
  }
  if (lower.checked) {
    password += randomdata(lowerSet);
  }
  if (number.checked) {
    password += randomdata(numberSet);
  }
  if (special.checked) {
    password += randomdata(specialSet);
  }
  if (password.length < passLength.value) {
    return generatepassword(password);
  }

  passOutput.value = trunc(password, passLength.value);
}
btn.addEventListener("click", function () {
  generatepassword();
});
function trunc(str, num) {
  if (str.length > num) {
    let substr = str.substring(0, num);
    return substr;
  } else {
    return str;
  }
}
