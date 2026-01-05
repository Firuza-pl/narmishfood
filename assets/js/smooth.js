(() => {
  // ===== Counter Animation =====
  const counters = document.querySelectorAll('.counter');

  const runCounter = (counter) => {
    const target = +counter.dataset.target;
    let count = 0;

    const step = () => {
      count += Math.ceil(target / 100); // increment faster for bigger numbers
      if (count >= target) count = target;
      counter.textContent = count;
      if (count < target) requestAnimationFrame(step);
    };

    step();
  };

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach(counter => counterObserver.observe(counter));

  // ===== Smooth Scroll for Nav Links =====
  document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===== Preloader =====
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;

    preloader.style.transition = 'opacity 0.8s ease';
    preloader.style.opacity = '0';

    setTimeout(() => preloader.style.display = 'none', 800);
  });

  // ===== Back to Top Button =====
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) { // show earlier
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


})();
