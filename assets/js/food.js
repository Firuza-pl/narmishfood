AOS.init({
  duration: 600, // animation duration in ms
  once: true
});

// Refresh AOS every time the mobile menu opens
const navbarCollapse = document.getElementById('navbarResponsive');
navbarCollapse.addEventListener('shown.bs.collapse', () => {
  AOS.refresh(); // triggers animation when menu becomes visible
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../../sw.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.log(err));
}

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
