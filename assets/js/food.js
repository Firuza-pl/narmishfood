//================== AOS Animation Initialization ===================//

document.addEventListener('DOMContentLoaded', function() {
      AOS.init({
          duration: 800,
          once: false,  // animate every scroll
          offset: 100   // start animation 100px before element comes in view
      });

      var carousel = document.getElementById('postCarousel');
carousel.addEventListener('slid.bs.carousel', function () {
    AOS.refresh();
});
  });

  //================== PWA Installation Prompt ===================//

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('PWA can be installed!');
});

function showInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      console.log(choiceResult.outcome);
      deferredPrompt = null;
    });
  }
}



