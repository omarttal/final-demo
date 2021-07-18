"use strict";
const sections = document.querySelectorAll("#ending");
const revealsection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  console.log("reached");
  setTimeout(function () {
    window.location.href = "page4.html";
  }, 8000);
};
const sectionobserver = new IntersectionObserver(revealsection, {
  root: null,
  threshold: 0.15,
});
sections.forEach(function (section) {
  sectionobserver.observe(section);
  //   section.classList.add("animation");
});
//////////////////
const sections1 = document.querySelectorAll(".toleft");
const revealsection1 = function (entries1, observer1) {
  const [entry1] = entries1;
  console.log(entry1);
  if (!entry1.isIntersecting) return;
  console.log("reached");
  entry1.target.classList.add("animation");
};
const sectionobserver1 = new IntersectionObserver(revealsection1, {
  root: null,
  threshold: 0.15,
});
sections1.forEach(function (sections1) {
  sectionobserver1.observe(sections1);
  //   section.classList.add("animation");
});

////////////////////
// const sections2 = document.querySelectorAll(".section");
// const revealsection2 = function (entries2, observer2) {
//   const [entry2] = entries2;
//   console.log(entry2);
//   if (!entry2.isIntersecting) return;
//   setTimeout(function () {
//     entry2.target.classList.add("animation2");
//   }, 10000);
// };

// const sectionobserver2 = new IntersectionObserver(revealsection1, {
//   root: null,
//   threshold: 0.15,
// });
// sections2.forEach(function (sections2) {
//   sectionobserver2.observe(sections2);
//   //   section.classList.add("animation");
// });
// const ending = document.querySelector(".ending");
// const revealsection2 = function (entries, observer) {
//   const [entry] = entries;
//   //   window.location.href = "page4.html";

//   // entry.target.classList.add("animation");
// };
// const sectionobserver2 = new IntersectionObserver(revealsection2, {
//   root: null,
//   threshold: 0.15,
// });
// sectionobserver2.observe(ending);
// console.log(ending.className);
// //   section.classList.add("animation");
// var target = document.querySelector("#ending");

// $(document).on("scroll", function () {
//   if ($(this).scrollTop() >= $("#ending").position().top) {
//     console.log("I have been reached");
//   }
// });
