document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    // Show pagination buttons
    document.getElementById('successPagination').style.display = 'block';
  });

  // Pagination "Next" button
  document.getElementById('nextPageBtn').addEventListener('click', function() {
    alert('You have reached the next page (simulated).');
    // Hide message and button after
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('successPagination').style.display = 'none';
  });

  // Newsletter subscription
  document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    const feedback = document.getElementById('newsletterFeedback');
    const msgDiv = document.getElementById('newsletterMsg');

    if (emailInput.checkValidity()) {
      feedback.style.display = 'none';
      msgDiv.style.display = 'block';
      emailInput.value = '';
    } else {
      feedback.style.display = 'block';
    }
  });
  

  function initMap() {
    const location = { lat: 5.6686, lng: 7.0582 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location,
    });
    new google.maps.Marker({ position: location, map: map });
  }