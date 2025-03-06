// Get DOM elements
  const passwordInput = document.getElementById('password');
  const lengthCheck = document.getElementById('length-check');
  const lowercaseCheck = document.getElementById('lowercase-check');
  const uppercaseCheck = document.getElementById('uppercase-check');
  const numberCheck = document.getElementById('number-check');
  const specialCheck = document.getElementById('special-check');
  const registerButton = document.getElementById('registerButton');
  const togglePasswordButtons = document.querySelectorAll('.toggle-password');
  const signupForm = document.getElementById('signupForm');
  
  // Validation patterns
  const patterns = {
    length: /.{8,}/,
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    number: /[0-9]/,
    special: /[!@#$_]/
  };
  
  // Initial state
  let validations = {
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    special: false
  };
  
  // Function to check password requirements
  function checkPasswordRequirements(password) {
    // Check each requirement
    validations.length = patterns.length.test(password);
    validations.lowercase = patterns.lowercase.test(password);
    validations.uppercase = patterns.uppercase.test(password);
    validations.number = patterns.number.test(password);
    validations.special = patterns.special.test(password);
    
    // Update UI for each requirement
    updateRequirementUI(lengthCheck, validations.length);
    updateRequirementUI(lowercaseCheck, validations.lowercase);
    updateRequirementUI(uppercaseCheck, validations.uppercase);
    updateRequirementUI(numberCheck, validations.number);
    updateRequirementUI(specialCheck, validations.special);
    
    // Check if all requirements are met
    const allRequirementsMet = Object.values(validations).every(validation => validation);
    
    // Enable or disable the register button
    registerButton.disabled = !allRequirementsMet;
  }
  
  // Function to update the UI for each requirement
  function updateRequirementUI(element, isValid) {
    if (isValid) {
      element.classList.add('valid');
      element.classList.remove('invalid');
    } else {
      element.classList.add('invalid');
      element.classList.remove('valid');
    }
  }
  
  // Listen for input events on the password field
  passwordInput.addEventListener('input', function() {
    checkPasswordRequirements(this.value);
  });
  
  // Toggle password visibility
  togglePasswordButtons.forEach(button => {
    button.addEventListener('click', function() {
      const input = this.previousElementSibling;
      const icon = this.querySelector('i');
      
      if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('bi-eye');
        icon.classList.add('bi-eye-slash');
      } else {
        input.type = 'password';
        icon.classList.remove('bi-eye-slash');
        icon.classList.add('bi-eye');
      }
    });
  });
  
  // Form submission
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    registerButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Creating account...';
    registerButton.disabled = true;
    
    setTimeout(() => {
      
      // Redirect to email verification page
      window.location.href = '../verifyEmail/emailVerification.html';
    }, 2000);
  });
  
  // Initialize on page load
  checkPasswordRequirements(passwordInput.value);

