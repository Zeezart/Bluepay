document.getElementById('request-reset').addEventListener('click', function(event) {
    event.preventDefault();

    let changePasswordSection = document.getElementsByClassName('change-password')[0];
    let resetEmailSection = document.getElementsByClassName('reset-email')[0];

    if (changePasswordSection && resetEmailSection) {
        changePasswordSection.classList.remove('display'); // Show password reset
        resetEmailSection.classList.add('display'); // Hide email request
    }
});