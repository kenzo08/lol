$(document).ready(function(){
$ ('.slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    adaptiveHeight: true,
    speed: 400,
    slidesToScroll: 1,

});
});
let slider = document.querySelector('.slider');
let list = document.querySelector('.list')
let yandex_map = document.querySelector('.yandex_map');
let map = document.querySelector('.map');
   map.onclick = function(){
       slider.style.visibility = 'hidden';
       yandex_map.style.visibility = 'visible';

   }

   list.onclick = function (){
       slider.style.visibility = 'visible';
       yandex_map.style.visibility = 'hidden';
   }