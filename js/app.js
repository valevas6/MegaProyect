
function alertUser() {
  alert("“Para acceder a nuestro servicio de compras línea se le solicita comunicarse con Freddy Rojas Barahona al correo frojas@megatropico.com o al teléfono 2200-0505, para activar su usuario”");
}


function step1() {
  var step1 = document.getElementById("step1");
  var step2 = document.getElementById("step2");
  var step3 = document.getElementById("step3");
  var step4 = document.getElementById("step4");
  step1.style.display = "block";
  step4.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "none";
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
} 

function step2() {
  var step1 = document.getElementById("step1");
  var step2 = document.getElementById("step2");
  var step3 = document.getElementById("step3");
  var step4 = document.getElementById("step4");
  step2.style.display = "block";
  step4.style.display = "none";
  step1.style.display = "none";
  step3.style.display = "none";
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  btn2.classList.add('active');
  btn1.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
} 

function step3() {
  var step1 = document.getElementById("step1");
  var step2 = document.getElementById("step2");
  var step3 = document.getElementById("step3");
  var step4 = document.getElementById("step4");
  step3.style.display = "block";
  step4.style.display = "none";
  step2.style.display = "none";
  step1.style.display = "none";
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");
  btn3.classList.add('active');
  btn2.classList.remove('active');
  btn1.classList.remove('active');
  btn4.classList.remove('active');
} 

function step4() {
  var step1 = document.getElementById("step1");
  var step2 = document.getElementById("step2");
  var step3 = document.getElementById("step3");
  var step4 = document.getElementById("step4");
  step4.style.display = "block";
  step1.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "none";
  var btn4 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn1 = document.getElementById("btn4");
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
  btn4.classList.remove('active');
} 

window.addEventListener('load', function(){
    new Glider(document.querySelector('.list-carousel'),{
      type:'carousel',  
      slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        dots: '.indicators-carousel',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 800,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            }
          ]  
    }).mount();
});
