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
        if(buttonsClicked < 4) {
          seatButton.classList.toggle('bg-green-500');
          
          
          buttonsClicked++;
      }
       // seatButton.classList.toggle('bg-green-500');
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

/*document.addEventListener("DOMContentLoaded", function() {
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
});*/

//show number of seat



document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".seat-button");
  const counterButton = document.getElementById("counterButton");

  let count = 0;
  let selectedSeats = 0;

  const updateCounterButton = () => {
      counterButton.textContent = ` ${count}`;
  };

  const showCounterButton = () => {
      if (count > 0) {
          counterButton.classList.remove("hidden");
      } else {
          counterButton.classList.add("hidden");
      }
  };

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          if (selectedSeats < 4) {
              count++;
              selectedSeats++;
              updateCounterButton();
              showCounterButton();
              if (selectedSeats === 4) {
                  disableButtons();
              }
          }
      });
  });

  counterButton.addEventListener("click", function() {
      alert(`You clicked ${count} button(s).`);
  });

  /*const disableButtons = () => {
      buttons.forEach(button => {
          button.disabled = true;
      });
  };*/
});

//not convert green color

document.addEventListener("DOMContentLoaded", function() {
  let buttonsClicked = 0;

  document.querySelectorAll(".seat-button").forEach(item => {
      item.addEventListener('click', event => {
          if(buttonsClicked < 4) {
              item.classList.add('bg-green-500');
              
              
              buttonsClicked++;
          }
      });
  });
});


//decreses seat number


document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".seat-button");
  const counterDisplay = document.getElementById("counterDisplay");

  let count = 40;
  let selectedSeats = 0;

  const updateCounterButton = () => {
    counterDisplay.textContent = ` ${count} seats left`;
  };

  const showCounterButton = () => {
      if (count > 0) {
        counterDisplay.classList.remove("hidden");
      } else {
        counterDisplay.classList.add("hidden");
      }
  };

  buttons.forEach(button => {
      button.addEventListener("click", function() {
          if (selectedSeats < 4) {
              count--;
              selectedSeats++;
              updateCounterButton();
              showCounterButton();
              if (selectedSeats === 4) {
                  disableButtons();
              }
          }
      });
  });

  counterDisplay.addEventListener("click", function() {
      alert(`You clicked ${count} button(s).`);
  });

  /*const disableButtons = () => {
      buttons.forEach(button => {
          button.disabled = true;
      });
  };*/
});

//coupon
function applyCoupon() {
  var totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
  var grandTotal = parseFloat(document.getElementById('grandTotal').innerText);
  var couponField = document.getElementById('couponField').value;
  var successMessage = document.getElementById('successMessage');
  var applyButton = document.getElementById('applyButton');

  // Check if the coupon field is not empty and if the coupon is valid
  if (couponField === "NEW15" || couponField === "Coupon20") {
      // Apply 15% discount for "NEW15" coupon
      if (couponField === "NEW15") {
          var discountAmount = totalPrice * 0.15;
          grandTotal = totalPrice - discountAmount;
      }
      // Apply $20 discount for "Coupon20" coupon
      else if (couponField === "Coupon20") {
          grandTotal = totalPrice - 20;
      }

      // Update the grand total and display the success message
      document.getElementById('grandTotal').innerText = grandTotal.toFixed(2);
      successMessage.style.display = 'block';

      // Hide the coupon field
      document.getElementById('couponField').style.display = 'none';

      // Hide the apply button
      applyButton.style.display = 'none';
  } else {
      alert("Invalid coupon code. Please enter a valid coupon code.");
  }
}




//apply button

// Get references to the input field and the submit button
const couponInput = document.getElementById('couponInput');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the input field
couponInput.addEventListener('input', function() {
    // Get the value entered by the user and convert it to uppercase for case-insensitive matching
    const couponCode = this.value.toUpperCase();

    // Check if the entered coupon code is "NEW15" or "Coupon20"
    if (couponCode === "NEW15" || couponCode === "COUPON20") {
        // Enable the submit button if the coupon code is valid
        submitButton.disabled = false;
    } else {
        // Otherwise, keep the submit button disabled
        submitButton.disabled = true;
    }
});

//next button

const inputField1 = document.getElementById('inputField1');
const inputField2 = document.getElementById('inputField2');
const inputField3 = document.getElementById('inputField3');
const next = document.getElementById('next');

inputField1.addEventListener('input', toggleButtonState);
inputField2.addEventListener('input', toggleButtonState);
inputField3.addEventListener('input', toggleButtonState);

function toggleButtonState() {
  if (inputField1.value.trim() !== '' || inputField2.value.trim() !== '' || inputField3.value.trim() !== '') {
    next.removeAttribute('disabled');
    next.classList.remove('disabled:opacity-50');
  } else {
    next.setAttribute('disabled', true);
    next.classList.add('disabled:opacity-50');
  }
}

//apply button

document.addEventListener('DOMContentLoaded', function() {
  const couponCodeInput = document.getElementById('couponField');
  const applyButton = document.getElementById('applyButton');

  couponCodeInput.addEventListener('input', function() {
      const couponCode = couponCodeInput.value.trim();
      
      if (couponCode === 'NEW15' || couponCode === 'Coupon20') {
          applyButton.disabled = true;
      } else {
          applyButton.disabled = false;
      }
  });
});
