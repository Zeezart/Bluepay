

         // JavaScript for handling the section toggle behavior
         document.addEventListener('DOMContentLoaded', function() {
            // Get all section headers
            const sectionHeaders = document.querySelectorAll('.section-header');
            
            // Add click event listeners to all section headers
            sectionHeaders.forEach(header => {
                header.addEventListener('click', function() {
                    // Toggle the aria-expanded attribute
                    const isExpanded = this.getAttribute('aria-expanded') === 'true';
                    this.setAttribute('aria-expanded', !isExpanded);
                    
                    // Bootstrap's collapse will handle the rest via data attributes
                });
            });
            
            // Buttons functionality
            const approveButton = document.querySelector('.btn-approve');
            const rejectButton = document.querySelector('.btn-reject');
           
        });
    