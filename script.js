let i = 0;

document.querySelector(".website__button").addEventListener("click", function changeBG() {
  if (i === 0) {
    $('#website__parallax-first').css("background-image", "url(img/marysia.jpg)");
    i++;
  } else if (i === 1) {
    $('#website__parallax-first').css("background-image", "url(img/sukienka.jpg)");
    i++;
  } else if (i === 2) {
    $('#website__parallax-first').css("background-image", "url(img/9.jpg)");
    i++;
  } else if (i === 3) {
    $('#website__parallax-first').css("background-image", "url(img/5.jpg)");
    i++;
  } else if (i === 4) {
    $('#website__parallax-first').css("background-image", "url(img/legia.jpg)");
    i++;
  } else if (i === 5) {
    $('#website__parallax-first').css("background-image", "url(img/ania.jpg)");
    i++;
  } else if (i === 5) {
    $('#website__parallax-first').css("background-image", "url(img/11.jpg)");
    i++;
  } else if (i === 6) {
    i === 0;
  }
});