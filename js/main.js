const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  // AutoPlay API
  autoplay: {
    delay: 5000,
  },

});

// ----------- Slick -------------- >>>

$(document).ready(function(){
  $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrow:true,
      autoplay:true,
      prevArrow:'.prev-btn',
      nextArrow:'.next-btn'
      })
})
  


$(document).ready(function(){
  $('.best-seller-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      rows:3,
      prevArrow:'.best-seller-prev-btn',
      nextArrow:'.best-seller-next-btn'
      })
})
  


$(document).ready(function(){
  $('.blog-cards').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      prevArrow:false,
      nextArrow:false
      })
})
  

$(document).ready(function(){
  $('.feedback').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:true,
      autoplay:true,
      prevArrow:false,
      nextArrow:false
      })
})


$(document).ready(function(){
  $('.right-brand-move').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay:true,
      prevArrow:false,
      nextArrow:false
      })
})






// Create Varibles

const accountBtn = document.querySelector('.account-btn');
const rupeeBtn = document.querySelector('.rupee-btn');

const loginBox = document.querySelector('.login-box');
const dropPart = document.querySelector('.drop-part');


accountBtn.addEventListener('click', () => {
    loginBox.classList.toggle('active');
})


rupeeBtn.addEventListener('click', () => {
    dropPart.classList.toggle('active');
})


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.rupee-btn span')) {
      var dropdowns = document.getElementsByClassName("drop-part");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        
        var openDropdown = dropdowns[i];
        
        if (openDropdown.classList.contains('active')) {
          openDropdown.classList.remove('active');
        }
      }
    }
    if (!event.target.matches('.account-btn span')) {
        var dropdowns = document.getElementsByClassName("login-box");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
        
          if (openDropdown.classList.contains('active')) {
            openDropdown.classList.remove('active');
          }
        }
      }
}



const topOptions = document.querySelector('.top-options');
const timeShow = document.querySelector('.one-time-show');


topOptions.addEventListener('mouseover',() => {
  timeShow.classList.add('show');
})


topOptions.addEventListener('mouseout',() => {
  timeShow.classList.remove('show');
})