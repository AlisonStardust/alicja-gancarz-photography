var firstParallax = ['img/1.jpg', 'img/tokyo.jpg', 'img/bw.jpg', 'img/3.jpg', 'img/11.jpg', 'img/Damian.jpg', 'img/ania.jpg', 'img/legia.jpg', 'img/sukienka.jpg', 'img/9.jpg', 'img/lgbt.jpg'];
var secondParallax = ['img/portrait/1.jpg', 'img/portrait/pasiut.jpg', 'img/portrait/ola4.jpg', 'img/portrait/3.jpg', 'img/portrait/2.jpg', 'img/portrait/4.jpg', 'img/portrait/5.jpg', 'img/portrait/6.jpg',
'img/portrait/7.jpg', 'img/portrait/8.jpg', 'img/portrait/9.jpg', 'img/portrait/10.jpg'];
var thirdParallax = ['img/event/1.jpg', 'img/event/2.jpg', 'img/event/3.jpg', 'img/event/4.jpg', 'img/event/5.jpg', 'img/event/6.jpg',
'img/event/7.jpg', 'img/event/8.jpg', 'img/event/9.jpg', 'img/event/10.jpg', 'img/event/11.jpg', 'img/event/12.jpg', 'img/event/13.jpg', 'img/event/14.jpg'];
var fourthParallax = ['img/nature/1.jpg', 'img/nature/2.jpg', 'img/nature/3.jpg', 'img/nature/4.jpg', 'img/nature/5.jpg', 'img/nature/6.jpg',
'img/nature/7.jpg', 'img/nature/8.jpg', 'img/nature/9.jpg', 'img/nature/10.jpg', 'img/nature/11.jpg', 'img/nature/12.jpg', 'img/nature/13.jpg'];
var sixthParallax = ['img/lights/1.jpg', 'img/lights/2.jpg', 'img/lights/3.jpg', 'img/lights/3ipol.jpg', 'img/lights/4.jpg', 'img/lights/5.jpg', 'img/lights/6.jpg',
'img/lights/7.jpg'];
var fifthParallax = ['img/wedding/1.jpg', 'img/wedding/2.jpg', 'img/wedding/3.jpg', 'img/wedding/4.jpg', 'img/wedding/5.jpg', 'img/wedding/6.jpg'];


let x = 0;
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let zet;

document.querySelector(".website__button2").addEventListener("click", function changeBG() {
  x++;
  if (x >= firstParallax.length) {
    x = 0;
  }
  $('.website__parallax-first').css("background-image", "url(" + firstParallax[x] + ")");
});

document.querySelector(".website__button1").addEventListener("click", function changeBG() {
  x--;
  if (x < 0) {
    x = firstParallax.length-1;
  }
  $('.website__parallax-first').css("background-image", "url(" + firstParallax[x] + ")");
});


document.querySelector(".website__button4").addEventListener("click", function changeBG() {
  x1++;
  if (x1 >= secondParallax.length) {
    x1 = 0;
  }
  $('.website__parallax-second').css("background-image", "url(" + secondParallax[x1] + ")");
});

document.querySelector(".website__button3").addEventListener("click", function changeBG() {
  x1--;
  if (x1 < 0) {
    x1 = secondParallax.length-1;
  }
  $('.website__parallax-second').css("background-image", "url(" + secondParallax[x1] + ")");
});

document.querySelector(".website__button6").addEventListener("click", function changeBG() {
  x2++;
  if (x2 >= thirdParallax.length) {
    x2 = 0;
  }
  $('.website__parallax-third').css("background-image", "url(" + thirdParallax[x2] + ")");
});

document.querySelector(".website__button5").addEventListener("click", function changeBG() {
  x2--;
  if (x2 < 0) {
    x2 = thirdParallax.length-1;
  }
  $('.website__parallax-third').css("background-image", "url(" + thirdParallax[x2] + ")");
});

document.querySelector(".website__button8").addEventListener("click", function changeBG() {
  x3++;
  if (x3 >= fourthParallax.length) {
    x3 = 0;
  }
  $('.website__parallax-fourth').css("background-image", "url(" + fourthParallax[x3] + ")");
});

document.querySelector(".website__button7").addEventListener("click", function changeBG() {
  x3--;
  if (x3 < 0) {
    x3 = fourthParallax.length-1;
  }
  $('.website__parallax-fourth').css("background-image", "url(" + fourthParallax[x3] + ")");
});

document.querySelector(".website__button10").addEventListener("click", function changeBG() {
  x4++;
  if (x4 >= fifthParallax.length) {
    x4 = 0;
  }
  $('.website__parallax-fifth').css("background-image", "url(" + fifthParallax[x4] + ")");
});

document.querySelector(".website__button9").addEventListener("click", function changeBG() {
  x4--;
  if (x4 < 0) {
    x4 = fifthParallax.length-1;
  }
  $('.website__parallax-fifth').css("background-image", "url(" + fifthParallax[x4] + ")");
});

document.querySelector(".website__button12").addEventListener("click", function changeBG() {
  x5++;
  if (x5 >= sixthParallax.length) {
    x4 = 0;
  }
  $('.website__parallax-sixth').css("background-image", "url(" + sixthParallax[x5] + ")");
});

document.querySelector(".website__button11").addEventListener("click", function changeBG() {
  x5--;
  if (x5 < 0) {
    x5 = sixthParallax.length-1;
  }
  $('.website__parallax-sixth').css("background-image", "url(" + sixthParallax[x5] + ")");
});