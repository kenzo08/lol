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


$(document).ready(function (){
    $('.info_slider').slick({
        dots: true,
        speed: 400,
        infinite: true,
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
let stepbought_btn = document.querySelector('.step-bought');
let credit_btn = document.querySelector('.credit');
let ipoteka_btn = document.querySelector('.ipoteka');
let stepbought_content = document.querySelector('#tab_1');
let credit_content = document.querySelector('#tab_2');
let ipoteka_content = document.querySelector('#tab_3');


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
   stepbought_btn.onclick = function (){
       stepbought_content.style.display = '-webkit-box';
       ipoteka_content.style.display = 'none';
       credit_content.style.display = 'none';
       stepbought_btn.classList.add('activ_but_js');
       stepbought_btn.style.backgroundColor=' #6BBD45';
       stepbought_btn.style.fontFamily='Montserrat-Bold';
       stepbought_btn.style.color='#FFFFFF';
       credit_btn.style.backgroundColor='transparent';
       credit_btn.style.fontFamily='Montserrat-Regular';
       credit_btn.style.color='black';
       ipoteka_btn.style.backgroundColor='transparent';
       ipoteka_btn.style.fontFamily='Montserrat-Regular';
       ipoteka_btn.style.color='black';


   };
credit_btn.onclick = function (){
    credit_btn.classList.add('activ_but_js');
    credit_btn.style.backgroundColor=' #6BBD45';
    credit_btn.style.fontFamily='Montserrat-Bold';
    credit_btn.style.color='#FFFFFF';
    ipoteka_btn.style.backgroundColor='transparent';
    ipoteka_btn.style.fontFamily='Montserrat-Regular';
    ipoteka_btn.style.color='black';
    stepbought_btn.style.backgroundColor='transparent';
    stepbought_btn.style.fontFamily='Montserrat-Regular';
    stepbought_btn.style.color='black';
    stepbought_content.style.display = 'none';
    ipoteka_content.style.display = 'none';
    credit_content.style.display = '-webkit-box';
};
ipoteka_btn.onclick = function (){
    ipoteka_btn.classList.add('activ_but_js');
    ipoteka_btn.style.backgroundColor=' #6BBD45';
    ipoteka_btn.style.fontFamily='Montserrat-Bold';
    ipoteka_btn.style.color='#FFFFFF';
    credit_btn.style.backgroundColor='transparent';
    credit_btn.style.fontFamily='Montserrat-Regular';
    credit_btn.style.color='black';
    stepbought_btn.style.backgroundColor='transparent';
    stepbought_btn.style.fontFamily='Montserrat-Regular';
    stepbought_btn.style.color='black';
    stepbought_content.style.display = 'none';
    ipoteka_content.style.display = '-webkit-box';
    credit_content.style.display = 'none';
}
