//scrolling section
document.addEventListener("DOMContentLoaded", function() {
    // Get a reference to the button and the buy ticket section
    const buyTicketButton = document.getElementById('buyTicketButton');
    const buyTicketSection = document.getElementById('buyTicketSection');
  
    // Add click event listener to the button
    buyTicketButton.addEventListener('click', function() {
      // Scroll the buy ticket section into view smoothly
      buyTicketSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  //select seat

  document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons with the 'seat-button' class
    const seatButtons = document.querySelectorAll('.seat-button');
  
    // Add click event listener to each seat button
    seatButtons.forEach(function(seatButton) {
      seatButton.addEventListener('click', function() {
        // Toggle the 'bg-green-500' class to change the background color
        seatButton.classList.toggle('bg-green-500');
        // Toggle the 'text-white' class to change the text color
        seatButton.classList.toggle('text-white');
      });
    });
  });

  //leftoverseats and selected seat number
 
  
  

