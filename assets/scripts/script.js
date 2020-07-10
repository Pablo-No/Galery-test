var images = [
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg"
];
var alt = [
  "Sunflowers",
  "A tree in a plain",
  "Beach"
]
var previousImage = document.getElementById("previousImage");
var nextImage = document.getElementById("nextImage");
var slider = document.getElementById("slider");
var num = 0
//For almost all browsers
if (previousImage.addEventListener) {
  previousImage.addEventListener("click", prev);
  nextImage.addEventListener("click", next);
}//For IE 8 or older
else if (previousImage.attachEvent) {
  previousImage.attachEvent("onclick", prev);
  nextImage.attachEvent("onclick", next);
}
else {
  //Nothing can be done
}

function next() {
  num++;
  if(num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
  slider.alt = alt[num];
  }

function prev() {
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  slider.src = images[num];
  slider.alt = alt[num];
}
