var $carousel = $(".slider__list");
$carousel.flickity({
    draggable: true,
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 5000,
    on: {
        // // ready: function() {


        // // }

        // ,
        change: function(index) {
            const newIndex = index + 1;
            const number = $(".number h2");
            number.text("0" + newIndex + "/");

        }
    }


});
// var header = document.querySelector(".header");
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

faqTitle.forEach(function(item) {
    item.addEventListener("click", function() {
        var panel = this.nextElementSibling;


        faqPara.forEach(function(e) {
            e.classList.remove("open");

        })
        panel.classList.toggle("open");
        // faqPara.forEach(function(p) {
        //     p.style.height = "0";
        // })






    })
})
var $carousel = $(".content__img");
$carousel.flickity({
    draggable: false,
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    pageDots: false,
    // autoPlay: 3000,

    // onchange: function(index) {
    //     var newIndex = index + 1;
    //     var number = $(".number  h2");
    //     number.text("0" + newIndex + "/");
    //     console.log(newIndex);
    // }
});

var $para = $(".content__para");
$para.flickity({
    draggable: false,
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    pageDots: false,

    // on: {

    //     change: function(index) {
    //         const newIndex = index + 1;
    //         const number = $(".number");
    //         number.text("0" + newIndex);

    //     }
    // }

});



$(".btn-next").on("click", function(index) {
    $('.content__img').flickity("next");
    $('.content__para').flickity("next");
    // const newIndex = index + 1;
    // const number = $(".number  h2");
    // console.log(newIndex);



})
$(".btn-prev").on("click", function(index) {
        $('.content__img').flickity("previous");
        $('.content__para').flickity("previous");
        // const newIndex = index + 1;
        // const number = $(".number  h2");
        // number.text("0" + newIndex);
    })
    // var same = document.querySelectorAll(".same__product");
    // var hover = document.querySelectorAll(".hover");


// same.forEach(function(e) {
//     e.addEventListener("mouseenter", function() {
//        hover.forEach(function(i){
//           i.classList.remove("active");
//        })

//     })
// })
var btns = document.querySelectorAll(".page__nav-number span");
var page = document.querySelectorAll(".page");
var next = document.querySelector(".step-next");
var prev = document.querySelector(".step-prev");

// next.addEventListener("click", function(index) {
//     var btns = document.querySelectorAll(".page__nav-number span");
//     var page = document.querySelectorAll(".page");

//     page.forEach(function(e) {
//         e.classList.add("hide");
//     })
//     console.log(page.length);
//     page[page.length - 1].classList.remove("hide");
// })
// prev.addEventListener("click", function(index) {
//     var btns = document.querySelectorAll(".page__nav-number span");
//     var page = document.querySelectorAll(".page");
//     var next = document.querySelector(".step-next");
//     var prev = document.querySelector(".step-prev");

//     page.forEach(function(e) {
//         e.classList.add("hide");
//     })
//     page[0].classList.remove("hide");
// })

btns.forEach(function(btn, index) {
    btn.addEventListener("click", function(i) {
        var btns = document.querySelectorAll(".page__nav-number span");
        var page = document.querySelectorAll(".page");
        var next = document.querySelector(".step-next");
        var prev = document.querySelector(".step-prev");

        btns.forEach(function(e) {
            e.classList.remove("active");
        })
        page.forEach(function(e) {
            e.classList.add("hide");
        })
        btn.classList.add("active");
        console.log(index);
        page[index].classList.remove("hide");
    })
})
var hambur = document.querySelector(".hamburger"),
    nav = document.querySelector(".nav");

hambur.addEventListener("click", function(e) {


    hambur.classList.toggle("active");
    nav.classList.toggle("active");





})
var faq = document.querySelectorAll(".faq__list-item"),
    para = document.querySelectorAll(".faq__para-item");
faq.forEach(function(e, index) {
    e.addEventListener("mouseenter", function() {
        para.forEach(function(e) {
            e.classList.remove("open");
        })
        para[index].classList.add("open");
    })
})

var faqMain = document.querySelectorAll(".accord__title"),
    p = document.querySelectorAll(".accord p")
faqMain.forEach(function(e, index) {
    e.addEventListener("click", function() {
        var panel = this.nextElementSibling;
        p.forEach(function(p) {
            p.style.height = 0;
        })
        faqMain.forEach(function(i, index) {
            i.classList.remove("active")
        })
        this.classList.toggle("active");
        this.nextElementSibling.style.height = panel.scrollHeight + "px"
    })
})


// history

var $carousel = $(".history__list");
$carousel.flickity({
    draggable: true,
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    autoPlay: 8000,
    groupCells: 2,


    pageDots: false,

    on: {
        // // ready: function() {


        // // }

        // ,
        // change: function(index) {
        //     const newIndex = index + 1;
        //     const number = $(".number h2");
        //     number.text("0" + newIndex + "/");

        // }
    }


});
$(".history__btn").on("click", function() {
    $(".history__list").flickity("next");


})
var about = document.querySelectorAll(".about__part-item");
var page = document.querySelectorAll(".about__section");

about.forEach(function(e, index) {
    e.addEventListener("click", function() {
        about.forEach(e => {
            e.classList.remove("active");
        })
        page.forEach(e => {
            e.classList.remove("active");
        })
        this.classList.add("active");
        page[index].classList.add("active");

    })
})

//window resize
var windowWidth = window.innerWidth;

window.addEventListener("resize", function() {
        if (windowWidth > 992) {
            nav.classList.remove("active");
            hambur.classList.remove("active");
            $carousel.flickity({
                draggable: true,
                cellAlign: 'left',
                contain: true,
                prevNextButtons: false,
                wrapAround: true,
                // autoPlay: 5000,
                groupCells: 1,


                pageDots: false,

                on: {
                    // // ready: function() {


                    // // }

                    // ,
                    // change: function(index) {
                    //     const newIndex = index + 1;
                    //     const number = $(".number h2");
                    //     number.text("0" + newIndex + "/");

                    // }
                }


            });

        }
    })
    //same 
    // $(".same").flickity({
    //     // draggable: true,
    //     cellAlign: 'left',
    //     contain: true,
    //     prevNextButtons: false,
    //     wrapAround: false,
    //     autoPlay: 1000,
    //     pageDots: false
    //         // on: {
    //         //     // // ready: function() {


//     //     // // }

//     //     // ,
//     //     change: function(index) {
//     //         const newIndex = index + 1;
//     //         const number = $(".number h2");
//     //         number.text("0" + newIndex + "/");

//     //     }
//     // }


// });

var type = document.querySelectorAll(".type__icon-item");
var img = document.querySelectorAll(".--img");
var black = document.querySelectorAll(".black");

var white = document.querySelectorAll(".white");



type.forEach(function(e, index) {
        e.addEventListener("click", function() {



            // white.forEach(function(i) {
            //         i.classList.remove("active");
            //     })
            // type.forEach(function(i) {
            //     i.classList.remove("active");
            // })
            type[index].classList.toggle("active");
            if (type[index].classList.contains("active")) {
                white[index].classList.toggle("active");

            } else {
                white[index].classList.remove("active");
            }
        })
    })
    //product__list
var product = document.querySelectorAll(".product__list");
var tab = document.querySelectorAll(".tab");
tab.forEach(function(i, index) {
    i.addEventListener("click", function() {
        product.forEach(function(e) {
            e.classList.remove("active");
        })
        tab.forEach(function(e) {
            e.classList.remove("active");
        })
        this.classList.add("active");
        product[index].classList.add("active");
    })
})


$('.range-slider').jRange({
    from: 13500000,
    to: 117000000,
    step: 1,
    showScale: true,
    // format: '%s',
    // width: 500,
    showLabels: true,
    isRange: true,


    onstatechange: function() {
        var textHigh = document.querySelector(".pointer-label.high").textContent;
        var textLow = document.querySelector(".pointer-label.low").textContent;
        var high = $(".max");
        var low = $(".min");


        if (textHigh.length == 9) {
            var headHigh = textHigh.slice(0, 3);
            high.text(headHigh + "." + textHigh.slice(3, 6) + "." + textHigh.slice(6, 10) +
                "VND");
        }
        if (textHigh.length == 8) {
            var headHigh = textHigh.slice(0, 2);
            high.text(headHigh + "." + textHigh.slice(2, 5) + "." + textHigh.slice(5, 9) +
                "VND");

        }
        if (textLow.length == 9) {
            var headLow = textLow.slice(0, 3);
            low.text(headLow + "." + textLow.slice(2, 5) + "." + textLow.slice(5, 10) +
                "VND");

        }
        if (textLow.length == 8) {
            var headLow = textLow.slice(0, 2);
            low.text(headLow + "." + textLow.slice(2, 5) + "." + textLow.slice(5, 10) +
                "VND");

        }





    }
});