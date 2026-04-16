document.addEventListener('DOMContentLoaded', () => {
  // Example: Smooth scroll for internal links (if any)
  const links = document.querySelectorAll('a.nav-link');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Optional: Alert or welcome message
  // alert('Welcome to the Culture Page of Egbema Oil Kingdom!');

  // You can add more interactive features here
});