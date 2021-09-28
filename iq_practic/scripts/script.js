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
let activ_but = document.querySelector('.activ_but_js')
let yandex_map = document.querySelector('.yandex_map');
let map = document.querySelector('.map');
   map.onclick = function(){
       slider.style.visibility = 'hidden';
       list.style.backgroundColor='#FFFFFF';
       list.style.color='black';
       yandex_map.style.visibility = 'visible';
       map.classList.add('activ_but_js');
       list.classList.remove('activ_but_js');

   }

   list.onclick = function (){
   list.classList.add('activ_but_js');
       list.style.backgroundColor=' #6BBD45';
       list.style.color='#FFFFFF';
       map.classList.remove('activ_but_js');
       slider.style.visibility = 'visible';
       yandex_map.style.visibility = 'hidden';
   }