// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 // when 60% of section visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Remove active from all links
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active to the current link
        const id = entry.target.id;
        const activeLink = document.querySelector(`.navbar-nav a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, options);

  // Assign IDs to sections for observation
  sections.forEach(section => {
    if (!section.id) {
      section.id = section.querySelector('h1, h2').textContent.trim().toLowerCase().replace(/\s+/g, '-');
    }
    observer.observe(section);
  });

  // Optional: collapse the navbar when a link is clicked (Bootstrap does this automatically)
  // But if needed, you can manually toggle the collapse:
  const navbarCollapse = document.getElementById('navbarNav');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse && navbarCollapse.classList.contains('show')) {
        bsCollapse.hide();
      }
    });
  });
});