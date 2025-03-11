// document.addEventListener('DOMContentLoaded', function() {

//     const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
//     const sidebar = document.querySelector('.sidebar');
//     const sidebarOverlay = document.querySelector('.sidebar-overlay');
    
//     if (mobileMenuToggle) {
//       mobileMenuToggle.addEventListener('click', function() {
//         sidebar.classList.toggle('active');
//         sidebarOverlay.classList.toggle('active');
        
//         const icon = this.querySelector('i');
//         if (sidebar.classList.contains('active')) {
//           icon.classList.remove('fa-bars');
//           icon.classList.add('fa-times');
//         } else {
//           icon.classList.remove('fa-times');
//           icon.classList.add('fa-bars');
//         }
//       });
//     }
 
//     if (sidebarOverlay) {
//       sidebarOverlay.addEventListener('click', function() {
//         sidebar.classList.remove('active');
//         this.classList.remove('active');
//         const menuIcon = document.querySelector('.mobile-menu-toggle i');
//         if (menuIcon) {
//           menuIcon.classList.remove('fa-times');
//           menuIcon.classList.add('fa-bars');
//         }
//       });
//     }
    

//     const kycForm = document.getElementById('kycForm');
//     if (kycForm) {
//       kycForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         document.getElementById('successModal').style.display = 'flex';
//       });
//     }

//     const closeModalBtn = document.getElementById('closeModalBtn');
//     const getStartedBtn = document.getElementById('getStartedBtn');
    
//     if (closeModalBtn) {
//       closeModalBtn.addEventListener('click', function() {
//         document.getElementById('successModal').style.display = 'none';
//       });
//     }
    
//     if (getStartedBtn) {
//       getStartedBtn.addEventListener('click', function() {
//         document.getElementById('successModal').style.display = 'none';

//       });
//     }
  
//     const successModal = document.getElementById('successModal');
//     if (successModal) {
//       successModal.style.display = 'none';
//     }
    
//     // Initialize datepicker for date of birth field
//     const dobInput = document.getElementById('dob');
//     if (dobInput) {
//       dobInput.addEventListener('input', function(e) {
//         let value = e.target.value.replace(/\D/g, '');
        
//         if (value.length > 0) {
//           // Format as DD/MM/YYYY
//           if (value.length <= 2) {
//             value = value;
//           } else if (value.length <= 4) {
//             value = value.slice(0, 2) + '/' + value.slice(2);
//           } else {
//             value = value.slice(0, 2) + '/' + value.slice(2, 4) + '/' + value.slice(4, 8);
//           }
//         }
        
//         e.target.value = value;
//       });
//     }
    
//     // Toggle "Use Business Address" checkbox
//     const useBusinessAddressCheckbox = document.getElementById('useBusinessAddress');
//     if (useBusinessAddressCheckbox) {
//       useBusinessAddressCheckbox.addEventListener('change', function() {
//         if (this.checked) {
//           console.log('Using business address');
//         } else {
//           console.log('Not using business address');
//         }
//       });
//     }
    
//     // Handle file upload
//     const uploadLink = document.querySelector('.upload-link');
//     if (uploadLink) {
//       uploadLink.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         // Create a file input element
//         const fileInput = document.createElement('input');
//         fileInput.type = 'file';
//         fileInput.accept = 'image/*,.pdf';

//         fileInput.click();
        

//         fileInput.addEventListener('change', function() {
//           if (this.files && this.files[0]) {
//             const file = this.files[0];
            

//             if (file.size > 5 * 1024 * 1024) {
//               alert('File is too large. Maximum size is 5MB.');
//               return;
//             }
            
//             const uploadContainer = document.querySelector('.upload-container');
//             const uploadText = document.querySelector('.upload-text');
            
//             if (uploadText) {
//               uploadText.innerHTML = `
//                 <p class="mb-0">${file.name}</p>
//                 <p class="upload-hint text-muted small">Click to change</p>
//               `;
//             }
//           }
//         });
//       });
//     }
    
//   });
  









document.addEventListener('DOMContentLoaded', function() {
    // Sidebar toggle functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    
    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', function() {
        sidebarMenu.classList.toggle('show');
      });
    }

    // Custom period modal variables
    const periodDropdown = document.getElementById('period-dropdown');
    const customPeriodModal = document.getElementById('customPeriodModal');
    const modalBackdrop = document.getElementById('modalBackdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const applyBtn = document.getElementById('applyBtn');
    const fromDateInput = document.getElementById('fromDateInput');
    const toDateInput = document.getElementById('toDateInput');
    const dateFilterTagRow = document.getElementById('dateFilterTagRow');
    const dateFilterText = document.getElementById('dateFilterText');
    const removeFilterBtn = document.getElementById('removeFilterBtn');

    // Function to format date as DD MMM YYYY
    function formatDate(date) {
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    // Set today's date as default for date inputs
    const today = new Date();
    const todayFormatted = today.toISOString().split('T')[0];
    if (fromDateInput && toDateInput) {
      fromDateInput.value = todayFormatted;
      toDateInput.value = todayFormatted;
    }

    // Period dropdown selection
    if (periodDropdown) {
      const periodOptions = periodDropdown.querySelectorAll('.dropdown-item');
      
      periodOptions.forEach(option => {
        option.addEventListener('click', function(e) {
          e.preventDefault();
          const value = this.getAttribute('data-value');
          
          if (value === 'custom') {
            // Show custom period modal
            customPeriodModal.style.display = 'block';
            modalBackdrop.style.display = 'block';
          } else {
            // Handle other period options
            let filterText = '';
            const today = new Date();
            
            switch(value) {
              case 'today':
                filterText = `Filtered by: ${formatDate(today)}`;
                break;
              case 'yesterday':
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);
                filterText = `Filtered by: ${formatDate(yesterday)}`;
                break;
              case '1week':
                const weekAgo = new Date(today);
                weekAgo.setDate(weekAgo.getDate() - 7);
                filterText = `Filtered by: ${formatDate(weekAgo)} - ${formatDate(today)}`;
                break;
            }
            
            // Show filter tag
            dateFilterText.textContent = filterText;
            dateFilterTagRow.style.display = 'block';
          }
        });
      });
    }

    // Close modal events
    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', function() {
        customPeriodModal.style.display = 'none';
        modalBackdrop.style.display = 'none';
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        customPeriodModal.style.display = 'none';
        modalBackdrop.style.display = 'none';
      });
    }

    // Apply custom date filter
    if (applyBtn) {
      applyBtn.addEventListener('click', function() {
        const fromDate = new Date(fromDateInput.value);
        const toDate = new Date(toDateInput.value);
        
        if (fromDate > toDate) {
          alert('From date cannot be after To date');
          return;
        }
        
        // Format dates for display
        const fromFormatted = formatDate(fromDate);
        const toFormatted = formatDate(toDate);
        
        // Update filter tag text and show it
        dateFilterText.textContent = `Filtered by: ${fromFormatted} - ${toFormatted}`;
        dateFilterTagRow.style.display = 'block';
        
        // Close modal
        customPeriodModal.style.display = 'none';
        modalBackdrop.style.display = 'none';
        
        // Here you would typically fetch filtered data from the server
        console.log(`Filtering data from ${fromDateInput.value} to ${toDateInput.value}`);
      });
    }

    // Remove filter tag
    if (removeFilterBtn) {
      removeFilterBtn.addEventListener('click', function() {
        dateFilterTagRow.style.display = 'none';
        // Reset any applied filters
        console.log('Filter removed');
      });
    }

    // Pagination functionality
    const paginationLinks = document.querySelectorAll('.pagination .page-link');
    paginationLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all
        document.querySelectorAll('.pagination .page-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Add active class to clicked item if it's a number
        if (!this.classList.contains('nav-btn')) {
          this.parentElement.classList.add('active');
          // Update page info (in a real app, you would fetch data for the new page)
          const pageNum = this.textContent;
          document.querySelector('.pagination-info').textContent = `Page ${pageNum} of 30`;
        }
      });
    });

    // Previous and Next button functionality
    const prevBtn = document.querySelector('.nav-btn.prev');
    const nextBtn = document.querySelector('.nav-btn.next');
    
    if (prevBtn) {
      prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const activeItem = document.querySelector('.pagination .page-item.active');
        if (activeItem && activeItem.previousElementSibling && 
            !activeItem.previousElementSibling.querySelector('.nav-btn')) {
          // Simulate click on previous page number
          activeItem.previousElementSibling.querySelector('.page-link').click();
        }
      });
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const activeItem = document.querySelector('.pagination .page-item.active');
        if (activeItem && activeItem.nextElementSibling && 
            !activeItem.nextElementSibling.classList.contains('ellipsis') &&
            !activeItem.nextElementSibling.querySelector('.nav-btn')) {
          // Simulate click on next page number
          activeItem.nextElementSibling.querySelector('.page-link').click();
        }
      });
    }
  });