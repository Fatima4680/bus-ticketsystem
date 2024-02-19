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

  //added in table
  document.addEventListener("DOMContentLoaded", function() {
    const seatButtons = document.querySelectorAll('.seat-button');
    const selectedSeatsTable = document.getElementById('selectedSeatsTable');
    const totalPriceDisplay = document.getElementById('totalPrice');
    let selectedSeats = []; // Array to track selected seats
    let totalSelectedPrice = 0; // Variable to track total price of selected seats

    seatButtons.forEach(function(seatButton) {
        seatButton.addEventListener('click', function() {
            const seatNumber = seatButton.textContent;

            // Check if the seat is already selected
            if (selectedSeats.includes(seatNumber)) {
                alert('This seat has already been selected!');
                return; // Exit the function if the seat is already selected
            }

            // Check if maximum seats have been selected
            if (selectedSeats.length >= 4) {
                alert('You cannot select more than 4 seats!');
                return; // Exit the function if maximum seats are already selected
            }

            // Toggle classes to show the seat as selected
            seatButton.classList.add('bg-green-500', 'text-white');

            // Update selected seat information
            updateSeatInfo(seatNumber); // Pass seat number as parameter

            // Add the selected seat to the tracking array
            selectedSeats.push(seatNumber);

            // Calculate total price
            totalSelectedPrice += 550; // Example price
            totalPriceDisplay.textContent = totalSelectedPrice + ' BDT'; // Update total price display
        });
    });

    function updateSeatInfo(seatNumber) {
        const selectedSeatsRow = document.createElement('tr');
        const seatCell = document.createElement('td');
        const classCell = document.createElement('td');
        const priceCell = document.createElement('td');

        seatCell.textContent = seatNumber;
        classCell.textContent = 'Economy'; // Example class
        priceCell.textContent = '550'; // Example price

        selectedSeatsRow.appendChild(seatCell);
        selectedSeatsRow.appendChild(classCell);
        selectedSeatsRow.appendChild(priceCell);

        selectedSeatsTable.querySelector('tbody').appendChild(selectedSeatsRow);
    }
});


//apply coupon

document.addEventListener("DOMContentLoaded", function() {
  const applyCouponButton = document.getElementById('applyCouponButton');
  const totalPriceDisplay = document.getElementById('totalPrice');
  const grandTotalDisplay = document.getElementById('grandTotal');
  const couponInput = document.getElementById('couponInput');

  
  let selectedSeats = []; // Array to store selected seat numbers
  const pricePerSeat = 550; // Price per seat in BDT
  let totalSelectedPrice = 0; // Variable to track total price of selected seats

  // Apply coupon button click event
  applyCouponButton.addEventListener('click', function() {
      applyCoupon(couponInput.value);
  });

  // Function to update total price
  function updateTotalPrice() {
      // Calculate total price based on the seats selected
      totalSelectedPrice = selectedSeats.length * pricePerSeat;
      totalPriceDisplay.textContent = totalSelectedPrice.toFixed(2) + ' BDT';
  }

  // Apply coupon function
  function applyCoupon(couponCode) {
      let discount = 0;
      
      // Check which coupon code was applied
      if (couponCode === 'NEW15' || couponCode === 'Coupon20') {
          discount = 0.15; // 15% discount for both coupons
          
          // Hide the coupon field after applying the coupon
          couponInput.style.display = 'none';
          applyCouponButton.style.display='none'
      } else {
          alert('Invalid coupon code!');
          return;
      }

      // Calculate discounted price
      const discountedPrice = totalSelectedPrice * (1 - discount);
      
      // Update the grand total display after applying the discount
      grandTotalDisplay.textContent = discountedPrice.toFixed(2) + ' BDT';
      
      alert('Coupon applied successfully!');
  }
});



  
