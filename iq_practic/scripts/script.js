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
$(document).ready(function (){
    $('.about_slide').slick({
        dots: true,
        speed: 400,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
let slider = document.querySelector('.slider');
let list = document.querySelector('.list')
let activ_but = document.querySelector('.activ_but_js')
let yandex_map = document.querySelector('.yandex_map');
let map = document.querySelector('.map');
let param_showclick = document.querySelector('.else-param');
let param_details= document.querySelector('.params');
let param = document.querySelector('.params');
let paramlistjs= document.querySelector('.param_list_js');
let line = document.querySelector('.line');
let container_sm =document.querySelector('.container-sm');
let border_left = document.querySelector('.border-left');
   map.onclick = function(){
       list.style.fontFamily='Montserrat-Regular';
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
       list.style.fontFamily='Montserrat-Bold';
       list.style.color='#FFFFFF';
       map.classList.remove('activ_but_js');
       slider.style.visibility = 'visible';
       yandex_map.style.visibility = 'hidden';
   }
   param_showclick.onclick = function (){
       if(!param.classList.contains('param_list_js')){
           param_details.style.display = 'block';
           param.classList.add('param_list_js');
           line.style.height = '1250px';
           container_sm.style.height = '1325px';
           border_left.style.height = '1325px';
           param_showclick.textContent = "Скрыть параметры";


       }else{
           param.classList.toggle('param_list_js');
           param_details.style.display = 'none';
           line.style.height = '440px';
           container_sm.style.height = '500px';
           border_left.style.height = '500px';
           param_showclick.textContent = "Еще параметры";

       }

   };