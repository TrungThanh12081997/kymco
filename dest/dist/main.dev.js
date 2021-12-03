"use strict";

var $carousel = $(".slider__list");
$carousel.flickity({
  draggable: true,
  cellAlign: 'left',
  contain: true,
  prevNextButtons: false,
  wrapAround: true,
  on: {
    // // ready: function() {
    // // }
    // ,
    change: function change(index) {
      var newIndex = index + 1;
      var number = $(".number h2");
      number.text("0" + newIndex + "/");
    }
  }
}); // var header = document.querySelector(".header");
// window.addEventListener("scroll", function() {
//     var pageY = window.pageYOffset;
//     if (pageY > 400) {
//         header.classList.add("black");
//     } else {
//         header.classList.remove("black");
//     }
// })

var faqTitle = document.querySelectorAll(".accor__item-content");
var faqPara = document.querySelectorAll(".accor__para");
faqTitle.forEach(function (item) {
  item.addEventListener("click", function () {
    var panel = this.nextElementSibling;
    faqPara.forEach(function (e) {
      e.classList.remove("open");
    });
    panel.classList.toggle("open"); // faqPara.forEach(function(p) {
    //     p.style.height = "0";
    // })
  });
});