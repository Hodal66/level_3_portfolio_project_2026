/* ============================================
   NAVIGATION DROPDOWN CONTROLLER
   Reusable across all pages
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('header nav');
  const overlay = document.querySelector('.nav-overlay');

  if (!toggle || !nav) return;

  // Toggle mobile menu
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });

  // Close on overlay click
  if (overlay) {
    overlay.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // Close on nav link click
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Scroll shadow effect on header
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(26,26,46,0.15)';
    } else {
      header.style.boxShadow = '';
    }
  });

  // Animate elements on scroll
  const animateElements = document.querySelectorAll('.service_card, .blog_card, .experience_card');
  if (animateElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    animateElements.forEach(el => observer.observe(el));
  }
});
