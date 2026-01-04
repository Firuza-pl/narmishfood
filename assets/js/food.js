  AOS.init({
    duration: 600, // animation duration in ms
    once: true
  });

  // Refresh AOS every time the mobile menu opens
  const navbarCollapse = document.getElementById('navbarResponsive');
  navbarCollapse.addEventListener('shown.bs.collapse', () => {
    AOS.refresh(); // triggers animation when menu becomes visible
  });