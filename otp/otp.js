document.addEventListener('DOMContentLoaded', function() {
    // Handle OTP input fields
    const otpInputs = document.querySelectorAll('.otp-input');
    const loginButton = document.querySelector('.btn-login');
    
    // Function to check if all OTP inputs are filled
    function checkInputsComplete() {
      let isComplete = true;
      let otpValue = '';
      
      otpInputs.forEach(input => {
        if (input.value.length === 0) {
          isComplete = false;
        }
        otpValue += input.value;
      });
      
      // Enable/disable login button based on completion
      if (loginButton) {
        loginButton.disabled = !isComplete;
        if (isComplete) {
          loginButton.classList.remove('disabled');
        } else {
          loginButton.classList.add('disabled');
        }
      }
      
      return isComplete;
    }
    
    // Initially disable the button
    if (loginButton) {
      loginButton.disabled = true;
      loginButton.classList.add('disabled');
    }
    
    // Auto-focus between OTP input fields
    otpInputs.forEach((input, index) => {
      input.addEventListener('input', function() {
        if (this.value.length === this.maxLength) {
          // Remove active class from current input
          this.classList.remove('active');
          
          // Move to next input if available
          if (index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
            otpInputs[index + 1].classList.add('active');
          }
        }
        
        // Check if all inputs are complete after any change
        checkInputsComplete();
      });
      
      input.addEventListener('keydown', function(e) {
        // Handle backspace to go to previous input
        if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
          // Remove active class from current input
          this.classList.remove('active');
          
          // Focus on previous input
          otpInputs[index - 1].focus();
          otpInputs[index - 1].classList.add('active');
        }
        
        // Run on next tick to capture the updated value after backspace
        setTimeout(checkInputsComplete, 0);
      });
      
      // Handle focus events
      input.addEventListener('focus', function() {
        // Remove active class from all inputs
        otpInputs.forEach(inp => inp.classList.remove('active'));
        
        // Add active class to focused input
        this.classList.add('active');
      });
    });
    
    // Countdown timer for resend code
    let timerCount = 60;
    const timerElement = document.getElementById('timer');
    
    if (timerElement) {
      const countdown = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        
        if (timerCount <= 0) {
          clearInterval(countdown);
          timerElement.parentElement.innerHTML = '<a href="#" class="text-primary">Resend code</a>';
        }
      }, 1000);
    }
   

    //RDIRECT

document.getElementById('submit').addEventListener('click', function(event) {
  event.preventDefault(); 

  window.location.href = "../dashboard/dashboard.html"; 
});
  });
  