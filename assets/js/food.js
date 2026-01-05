AOS.init({
  duration: 600, // animation duration in ms
  once: true
});

// Refresh AOS every time the mobile menu opens


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

const btn = document.getElementById('readMoreBtn');
const wrapper = document.querySelector('.post-text-wrapper');
const previewHeight = 150; // height of preview

btn.addEventListener('click', function(e){
  e.preventDefault();

  if(wrapper.classList.contains('expanded')){
    // Collapse smoothly
    const fullHeight = wrapper.scrollHeight; // current full height
    wrapper.style.height = fullHeight + 'px'; // set current height first

    requestAnimationFrame(() => { // wait for next frame
      wrapper.style.transition = 'height 0.9s ease';
      wrapper.style.height = previewHeight + 'px'; // animate to preview
    });

    wrapper.classList.remove('expanded');
    btn.textContent = 'Daha çox';

  } else {
    // Expand smoothly
    const fullHeight = wrapper.scrollHeight;
    wrapper.style.transition = 'height 0.9s ease';
    wrapper.style.height = fullHeight + 'px';
    wrapper.classList.add('expanded');
    btn.textContent = 'Daha az';
  }
});


