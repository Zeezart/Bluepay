document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
      togglePassword.addEventListener('click', function() {
        // Toggle type attribute
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Toggle icon
        togglePassword.querySelector('i').classList.toggle('fa-eye');
        togglePassword.querySelector('i').classList.toggle('fa-eye-slash');
      });
    }
  });
  

// DISABLING BUTTON
function checkInputs() {
    let emailValue = document.getElementById("email").value.trim();
    let passwordValue = document.getElementById("password").value.trim();
    let submitButton = document.getElementById("button");

    // Enable button if both fields are filled
    submitButton.disabled = !(passwordValue && emailValue);
}

// Attach event listeners
document.getElementById("email").addEventListener("input", checkInputs);
document.getElementById("password").addEventListener("input", checkInputs);



//RDIRECT

document.getElementById('button').addEventListener('click', function(event) {
  event.preventDefault(); 

  window.location.href = "../otp/otp.html"; 
});