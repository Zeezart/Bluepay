document.addEventListener('DOMContentLoaded', function() {
    // Handle KYC form submission
    const kycForm = document.getElementById('kycForm');
    if (kycForm) {
      kycForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation
        const requiredFields = kycForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
          if (!field.value) {
            isValid = false;
            field.classList.add('is-invalid');
          } else {
            field.classList.remove('is-invalid');
          }
        });
        
        if (isValid) {
          // Submit form - in a real app, this would be an API call
          console.log('KYC form submitted successfully');
          alert('Form submitted successfully!');
          
          // Simulate redirect to next step
          // window.location.href = 'bank-details.html';
        } else {
          alert('Please fill in all required fields.');
        }
      });
    }
    
    // Handle document upload
    const uploadLink = document.querySelector('.upload-link');
    if (uploadLink) {
      uploadLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*,application/pdf';
        
        // Trigger click on the file input
        fileInput.click();
        
        // Handle file selection
        fileInput.addEventListener('change', function() {
          if (this.files && this.files[0]) {
            const file = this.files[0];
            
            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
              alert('File size should not exceed 5MB.');
              return;
            }
            
            // Display selected file name
            const fileNameElement = document.createElement('p');
            fileNameElement.classList.add('text-success', 'mb-0', 'mt-2');
            fileNameElement.textContent = `Selected: ${file.name}`;
            
            // Replace upload link with file name
            const uploadContainer = document.querySelector('.upload-container');
            const uploadText = document.querySelector('.upload-text');
            
            // Remove existing file name if any
            const existingFileName = uploadContainer.querySelector('.text-success');
            if (existingFileName) {
              existingFileName.remove();
            }
            
            uploadText.appendChild(fileNameElement);
          }
        });
      });
    }
    
    // Handle "Use Business Address" checkbox
    const useBusinessAddressCheckbox = document.getElementById('useBusinessAddress');
    if (useBusinessAddressCheckbox) {
      useBusinessAddressCheckbox.addEventListener('change', function() {
        if (this.checked) {
          // In a real application, this would populate the address fields with business address
          console.log('Using business address for home address');
        }
      });
    }
    
    // Add functionality to sidebar menu items
    const sidebarLinks = document.querySelectorAll('.sidebar-menu .nav-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        if (!this.classList.contains('active')) {
          e.preventDefault();
          
          // Remove active class from all links
          sidebarLinks.forEach(l => l.classList.remove('active'));
          
          // Add active class to clicked link
          this.classList.add('active');
          
          // In a real app, this would navigate to the respective section
          console.log('Navigating to:', this.textContent.trim());
        }
      });
    });
  });
  