// let countDownDate = new Date("July 19, 2021 00:00:00").getTime();
// const timerending = function () {
//   const backImg = document.querySelector(".container");
//   const partywindow = document.querySelector(".img");
//   document.querySelector(".hidden").classList.remove("hidden");
//   backImg.style.backgroundImage = "url(imgs/blur.jpg)";
//   partywindow.classList.remove("hidden");
// };

// const birthday = document.getElementById("birthday");
// const password = document.getElementById("pwd");
// birthday.addEventListener("input", function () {
//   console.log(birthday.value);
// });
// const sub = document.querySelector(".sub");
// sub.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (
//     birthday.value === "2004-05-22" &&
//     password.value.toLowerCase() === "omarlovesmartyna"
//   ) {
//     window.location.href = "page2.html";
//   }
// });
const timer = function () {
  let countDownDate = new Date("July 18, 2021 3:15:00").getTime();

  // Update the count down every 1 second
  let x = setInterval(function () {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.trunc(distance / (1000 * 60 * 60 * 24));
    let hours = Math.trunc(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.trunc((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.trunc((distance % (1000 * 60)) / 1000);

    document.querySelector(
      "h1"
    ).innerHTML = `${days}d : ${hours}h : ${minutes}m :  ${seconds}s `;

    if (distance < 0) {
      clearInterval(x);
      window.location.href = "page2.html";
    }
  }, 1000);
};

// timerending();
timer();
