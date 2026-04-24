document.addEventListener('DOMContentLoaded', () => {
    // Select all social media links
    const socialLinks = document.querySelectorAll('footer a[aria-label]');

    // Add click event to each social media icon
    socialLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const platform = link.getAttribute('aria-label');
        alert(`You clicked on ${platform} icon!`);
      });
    });

    // Example: Adding interactivity to profile cards
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const name = card.querySelector('.card-title').innerText;
        const role = card.querySelector('.card-text').innerText;
        alert(`Profile: ${name}\nRole: ${role}`);
      });
    });
  });
