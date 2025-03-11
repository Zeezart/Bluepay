document.addEventListener('DOMContentLoaded', function() {

    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        
        const icon = this.querySelector('i');
        if (sidebar.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }
 
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('active');
        this.classList.remove('active');
        const menuIcon = document.querySelector('.mobile-menu-toggle i');
        if (menuIcon) {
          menuIcon.classList.remove('fa-times');
          menuIcon.classList.add('fa-bars');
        }
      });
    }
    

    const kycForm = document.getElementById('kycForm');
    if (kycForm) {
      kycForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('successModal').style.display = 'flex';
      });
    }

    const closeModalBtn = document.getElementById('closeModalBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', function() {
        document.getElementById('successModal').style.display = 'none';
      });
    }
    
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', function() {
        document.getElementById('successModal').style.display = 'none';

      });
    }
  
    const successModal = document.getElementById('successModal');
    if (successModal) {
      successModal.style.display = 'none';
    }
    
    // Initialize datepicker for date of birth field
    const dobInput = document.getElementById('dob');
    if (dobInput) {
      dobInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 0) {
          // Format as DD/MM/YYYY
          if (value.length <= 2) {
            value = value;
          } else if (value.length <= 4) {
            value = value.slice(0, 2) + '/' + value.slice(2);
          } else {
            value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
          }
        }
        
        e.target.value = value;
      });
    }
    
    // Toggle "Use Business Address" checkbox
    const useBusinessAddressCheckbox = document.getElementById('useBusinessAddress');
    if (useBusinessAddressCheckbox) {
      useBusinessAddressCheckbox.addEventListener('change', function() {
        if (this.checked) {
          console.log('Using business address');
        } else {
          console.log('Not using business address');
        }
      });
    }
    
    // Handle file upload
    const uploadLink = document.querySelector('.upload-link');
    if (uploadLink) {
      uploadLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a file input element
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*,.pdf';

        fileInput.click();
        

        fileInput.addEventListener('change', function() {
          if (this.files && this.files[0]) {
            const file = this.files[0];
            

            if (file.size > 5 * 1024 * 1024) {
              alert('File is too large. Maximum size is 5MB.');
              return;
            }
            
            const uploadContainer = document.querySelector('.upload-container');
            const uploadText = document.querySelector('.upload-text');
            
            if (uploadText) {
              uploadText.innerHTML = `
                <p class="mb-0">${file.name}</p>
                <p class="upload-hint text-muted small">Click to change</p>
              `;
            }
          }
        });
      });
    }
  });
  