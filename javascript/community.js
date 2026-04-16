document.addEventListener('DOMContentLoaded', () => {
  // Welcome alert
  alert('Welcome to the Communities page of Egbema Oil Kingdom!');

  // Example: Add click event to each community card for more details
  const communityCards = document.querySelectorAll('.card');
  communityCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.card-title').innerText;
      alert(`You clicked on ${title} community.`);
    });
  });

  
});