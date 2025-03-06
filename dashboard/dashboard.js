document.addEventListener('DOMContentLoaded', function() {
    // Get modal elements
    const modal = document.getElementById('successModal');
    const closeBtn = document.getElementById('closeModalBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    
    // Check if modal has been shown before
    const hasModalBeenShown = localStorage.getItem('dashboardModalShown');
    
    // Show modal if it hasn't been shown before
    if (!hasModalBeenShown) {
      modal.style.display = 'flex';
    } else {
      modal.style.display = 'none';
    }
    
    // Function to close modal
    function closeModal() {
      modal.style.display = 'none';
      // Store that modal has been shown
      localStorage.setItem('dashboardModalShown', 'true');
    }
    
    // Close modal when clicking the close button
    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }
    
    // Get started button functionality
    if (getStartedBtn) {
      getStartedBtn.addEventListener('click', function() {
        closeModal();
        
        // Show toast notification
        showToast('Welcome to Bluepay!', 'You can now start using the dashboard.', 5000);
      });
    }
    
    // Toast notification functionality
    function showToast(title, message, duration) {
      // Create toast container if it doesn't exist
      let toastContainer = document.querySelector('.toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(toastContainer);
      }
      
      // Create toast element
      const toastId = 'toast-' + Date.now();
      const toastHtml = `
        <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <strong class="me-auto">${title}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div class="toast-body">
            ${message}
          </div>
        </div>
      `;
      
      // Add toast to container
      toastContainer.insertAdjacentHTML('beforeend', toastHtml);
      
      // Initialize the Bootstrap toast
      const toastElement = document.getElementById(toastId);
      const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: duration
      });
      
      // Show the toast
      toast.show();
      
      // Remove toast from DOM after it's hidden
      toastElement.addEventListener('hidden.bs.toast', function() {
        toastElement.remove();
      });
    }
    
    // Navigation item click handler
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all nav items
        navItems.forEach(navItem => {
          navItem.classList.remove('active');
        });
        // Add active class to clicked item
        this.classList.add('active');
      });
    });
    
    // User profile dropdown (can be implemented if needed)
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
      userProfile.addEventListener('click', function() {
        // Implement dropdown functionality if needed
        console.log('User profile clicked');
      });
    }
  });
  