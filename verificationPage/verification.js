

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
            // const approveButton = document.getElementById('btn-approve');
            // const rejectButton = document.querySelector('.btn-reject');


            // const modalOverlay = document.getElementById('modalOverlay');
            // const closeModal = document.getElementById('closeModal');
            // const cancelButton = document.getElementById('cancelButton');
            // const confirmButton = document.getElementById('confirmButton');
            
            // // Function to show the modal
            // function showModal() {
            //     modalOverlay.style.display = 'flex';
            //     document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            // }
            
            // // Function to hide the modal
            // function hideModal() {
            //     modalOverlay.style.display = 'none';
            //     document.body.style.overflow = ''; // Restore scrolling
            // }
            
            // // Event listeners
            // approveButton.addEventListener('click', showModal);
            
            // closeModal.addEventListener('click', hideModal);
            
            // cancelButton.addEventListener('click', hideModal);
            
            // confirmButton.addEventListener('click', function() {
            //     // Here you would add the logic to actually approve the compliance
            //     alert('Compliance approved successfully!');
            //     hideModal();
            // });
            
            // // Close modal when clicking on the overlay
            // modalOverlay.addEventListener('click', function(event) {
            //     if (event.target === modalOverlay) {
            //         hideModal();
            //     }
            // });
            
            // // Close modal when pressing Escape key
            // document.addEventListener('keydown', function(event) {
            //     if (event.key === 'Escape' && modalOverlay.style.display === 'flex') {
            //         hideModal();
            //     }
            // });












            const approveButton = document.getElementById('btn-approve');
            const rejectButton = document.getElementById('btn-reject');
            const modalOverlay = document.getElementById('modalOverlay');
            const closeModal = document.getElementById('closeModal');
            const modalContent = document.getElementById('modalContent');
            const modalTitle = document.getElementById('modalTitle');
            
            // Function to show the modal
            function showModal() {
                modalOverlay.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
            
            // Function to hide the modal
            function hideModal() {
                modalOverlay.style.display = 'none';
                document.body.style.overflow = ''; // Restore scrolling
            }
            
            // Function to set up approve modal content
            function setupApproveModal() {
                modalTitle.textContent = ''; // No title for approve modal
                
                modalContent.innerHTML = `
                    <div class="modal-body">
                        <div class="info-icon">
                            <img src="../assets/warning.svg"/>
                        </div>
                        <h3 class="modal-title">You're about to approve this compliance, are you sure you want to approve?</h3>
                        <p class="modal-subtitle">This action is irreversible</p>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-cancel" id="cancelButton">No, Cancel</button>
                        <button class="btn-approve" id="confirmApproveButton">Yes, Approve</button>
                    </div>
                `;
                
                document.getElementById('cancelButton').addEventListener('click', hideModal);
                document.getElementById('confirmApproveButton').addEventListener('click', function() {
                    alert('Compliance approved successfully!');
                    hideModal();
                });
            }
            
            // Function to set up reject modal content
            function setupRejectModal() {
                modalTitle.textContent = 'Reject Transaction';
                
                modalContent.innerHTML = `
                    <div class="reject-modal-body">
                        <p class="reject-modal-subtitle">Enter reason for declining this submission</p>
                        <div class="form-group mb-3">
                            <label for="rejectComment" class="form-label">Comment</label>
                            <textarea id="rejectComment" class="comment-textarea" placeholder="Enter your reason here..."></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn-cancel btn-cancel-reject" id="cancelRejectButton">Cancel</button>
                        <button class="btn-reject" id="confirmRejectButton">Reject</button>
                    </div>
                `;
                
                document.getElementById('cancelRejectButton').addEventListener('click', hideModal);
                document.getElementById('confirmRejectButton').addEventListener('click', function() {
                    const reason = document.getElementById('rejectComment').value;
                    if (reason.trim() === '') {
                        alert('Please provide a reason for rejection.');
                    } else {
                        alert('Compliance rejected with reason: ' + reason);
                        hideModal();
                    }
                });
            }
            
            // Event listeners
            approveButton.addEventListener('click', function() {
                setupApproveModal();
                showModal();
            });
            
            rejectButton.addEventListener('click', function() {
                setupRejectModal();
                showModal();
            });
            
            closeModal.addEventListener('click', hideModal);
            
            // Close modal when clicking on the overlay
            modalOverlay.addEventListener('click', function(event) {
                if (event.target === modalOverlay) {
                    hideModal();
                }
            });
            
            // Close modal when pressing Escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && modalOverlay.style.display === 'flex') {
                    hideModal();
                }
            });
           
        });
    