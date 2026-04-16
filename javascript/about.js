// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Example: Alert when the page loads
  alert('Welcome to the About Egbema Oil Kingdom page!');

  // Example: Add event listener to pagination buttons if needed
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Implement your previous page logic here
      alert('Previous page clicked');
    });
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      // Implement your next page logic here
      alert('Next page clicked');
      
    });
  }

  // Example: Dynamically generate or update content if needed
  // For example, populate community list or other info

});