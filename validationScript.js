    // JavaScript code for form validation
	// Prevent form from submitting
  myForm.addEventListener('submit', function(e){
    e.preventDefault();
    validateInput(input);
  });
      // Retrieve the input field value
    let input = document.getElementById('inputField')
    const confirmMessage = document.getElementById('confirmMessage'); 
    const errorMessage = document.getElementById('errorMessage');

      // Regular expression pattern for alphanumeric input
      function validateInput(input){
        // Check if the input value matches the pattern
        const re = /^[a-zA-Z0-9]+$/;
        if (re.test(input.value)) {
          // Valid input: display confirmation and submit the form
          errorMessage.style.display = 'none';
          confirmMessage.textContent = 'Input is alphanumeric.';
          myForm.submit();
        } else {
          // Invalid input: display error message
          confirmMessage.style.display = 'none';
          errorMessage.textContent = 'Input is not alphanumeric. Please enter only letters and numbers.';
        }
      }

        