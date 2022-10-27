$(document).ready(function(){

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});



 $('.owl-carousel').owlCarousel({
    items: 5,
    loop:true,
    autoplay: true,
    autoplayTimeout: 5000,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        360:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

});


    

