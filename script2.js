"use strict";
const birthday = document.getElementById("birthday");
const password = document.getElementById("pwd");
birthday.addEventListener("input", function () {
  console.log(birthday.value);
});
const sub = document.querySelector(".sub");
sub.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    birthday.value === "2004-05-22" &&
    password.value.toLowerCase() === "omarlovesmartyna"
  ) {
    window.location.href = "page3.html";
  }
});
