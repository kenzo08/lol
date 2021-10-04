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


$(document).ready(function(){
    $ ('.last_slider').slick({
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
let news_btn = document.querySelector('.news_btn');
let history_btn = document.querySelector('.history_btn');
let article_btn = document.querySelector('.articles_btn');
let last_slider = document.querySelector('.last_slider');
let last_slider2= document.querySelector('.last_slider2');
let last_slider3 = document.querySelector('.last_slider3');
let order_btn = document.querySelector('.order-call');
let popup_window = document.querySelector('.popup1');
let container_fluid = document.querySelector('.overlay');
let popupinputs = document.querySelectorAll('input');
let butn_send = document.querySelector('.send_button');
let popup2 = document.querySelector('.popup2');
let warning = document.querySelector('.warning');
for(let popupinput of popupinputs) {
    popupinput.oninput = function (){
        if (popupinput.value == ""){
            warning.style.display = 'inline-block';
            popupinput.style.borderColor = 'red';
            butn_send.disabled = true;
        }else{
            butn_send.onclick = function submit_order() {
            popupinput.style.borderColor = '#6BBD45';
                    butn_send.disabled = false;
                    popup2.style.display = 'block';
                    popup2.style.position = 'fixed';
                    container_fluid.style.backgroundColor = 'black';
                    container_fluid.style.opacity = '0.8';
                    popup_window.style.display = 'none';
            }
        }
    }
}



order_btn.onclick = function () {
popup_window.style.display = 'block';
popup_window.style.position = 'fixed';
container_fluid.style.backgroundColor ='black';
container_fluid.style.opacity = '0.8';

}


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



news_btn.onclick = function (){
    $(document).ready(function(){
        $ ('.last_slider').slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            adaptiveHeight: true,
            speed: 400,
            slidesToScroll: 1,

        });
    });

    last_slider.style.display = 'block';
    last_slider3.style.display = 'none';
    last_slider2.style.display = 'none';
    news_btn.classList.add('activ_but_js');
    news_btn.style.backgroundColor=' #6BBD45';
    news_btn.style.fontFamily='Montserrat-Bold';
    news_btn.style.color='#FFFFFF';
    article_btn.style.backgroundColor='transparent';
    article_btn.style.fontFamily='Montserrat-Regular';
    article_btn.style.color='black';
    history_btn.style.backgroundColor='transparent';
    history_btn.style.fontFamily='Montserrat-Regular';
    history_btn.style.color='black';


};
article_btn.onclick = function (){
    article_btn.classList.add('activ_but_js');
    article_btn.style.backgroundColor=' #6BBD45';
    article_btn.style.fontFamily='Montserrat-Bold';
    article_btn.style.color='#FFFFFF';
    history_btn.style.backgroundColor='transparent';
    history_btn.style.fontFamily='Montserrat-Regular';
    history_btn.style.color='black';
    news_btn.style.backgroundColor='transparent';
    news_btn.style.fontFamily='Montserrat-Regular';
    news_btn.style.color='black';
    last_slider.style.display = 'none';
    last_slider3.style.display = 'none';
    last_slider2.style.display = 'block';
    $(document).ready(function(){
        $ ('.last_slider2').slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            adaptiveHeight: true,
            speed: 400,
            slidesToScroll: 1,

        });
    });
};


history_btn.onclick = function (){
    $(document).ready(function(){
        $ ('.last_slider3').slick({
            dots: true,
            infinite: false,
            slidesToShow: 3,
            adaptiveHeight: true,
            speed: 400,
            slidesToScroll: 1,

        });
    });

    history_btn.classList.add('activ_but_js');
    history_btn.style.backgroundColor=' #6BBD45';
    history_btn.style.fontFamily='Montserrat-Bold';
    history_btn.style.color='#FFFFFF';
    article_btn.style.backgroundColor='transparent';
    article_btn.style.fontFamily='Montserrat-Regular';
    article_btn.style.color='black';
    news_btn.style.backgroundColor='transparent';
    news_btn.style.fontFamily='Montserrat-Regular';
    news_btn.style.color='black';
    last_slider.style.display = 'none';
    last_slider3.style.display = 'block';
    last_slider2.style.display = 'none';
}




