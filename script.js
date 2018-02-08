// let i = 0;

// document.querySelector(".website__button2").addEventListener("click", function changeBG() {
//   if (i === 0) {
//     $('#website__parallax-first').css("background-image", "url(img/marysia.jpg)");
//     i++;
//   } else if (i === 1) {
//     $('#website__parallax-first').css("background-image", "url(img/sukienka.jpg)");
//     i++;
//   } else if (i === 2) {
//     $('#website__parallax-first').css("background-image", "url(img/9.jpg)");
//     i++;
//   } else if (i === 3) {
//     $('#website__parallax-first').css("background-image", "url(img/5.jpg)");
//     i++;
//   } else if (i === 4) {
//     $('#website__parallax-first').css("background-image", "url(img/legia.jpg)");
//     i++;
//   } else if (i === 5) {
//     $('#website__parallax-first').css("background-image", "url(img/ania.jpg)");
//     i++;
//   } else if (i === 6) {
//     $('#website__parallax-first').css("background-image", "url(img/11.jpg)");
//     i++;
//   } else if (i === 7) {
//     $('#website__parallax-first').css("background-image", "url(img/3.jpg)");
//     i = 0;
//   }
// });



var tablica = ['img/bw.jpg', 'img/3.jpg', 'img/11.jpg', 'img/ania.jpg', 'img/legia.jpg'];
let x = 0;

document.querySelector(".website__button2").addEventListener("click", function changeBG() {
  x++;
  if (x >= tablica.length) {
    console.log(x)
    x = 0;
  }
  console.log(x)
  $('#website__parallax-first').css("background-image", "url(" + tablica[x] + ")");
});

document.querySelector(".website__button1").addEventListener("click", function changeBG() {
  x--;
  if (x < 0) {
    console.log(x)
    x = tablica.length-1;
    console.log(x)
  }
  console.log(x)
  $('#website__parallax-first').css("background-image", "url(" + tablica[x] + ")");
});