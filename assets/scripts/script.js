var images = [
  "./assets/images/1.jpg",
  "./assets/images/2.jpg",
  "./assets/images/3.jpg"
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
//Installing of the PWA on desktop
let deferredPrompt;
const installBtn = document.getElementById('install-button')
installBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    installBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});
