document.addEventListener('DOMContentLoaded', function() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarMenu = document.getElementById('sidebarMenu');
    
    sidebarToggle.addEventListener('click', function() {
      sidebarMenu.classList.toggle('show');
    });

    // Close sidebar menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
      const isClickInsideToggle = sidebarToggle.contains(event.target);
      const isClickInsideSidebar = sidebarMenu.contains(event.target);
      
      if (!isClickInsideToggle && !isClickInsideSidebar && sidebarMenu.classList.contains('show')) {
        sidebarMenu.classList.remove('show');
      }
    });

    // Handle window resize to reset mobile menu state
    window.addEventListener('resize', function() {
      if (window.innerWidth > 767 && sidebarMenu.classList.contains('show')) {
        sidebarMenu.classList.remove('show');
      }
    });
  });