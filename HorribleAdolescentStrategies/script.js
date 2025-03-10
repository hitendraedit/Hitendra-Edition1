
// Global Variables
let selectedPlan = null;

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
  // Plan Selection
  const selectPlanButtons = document.querySelectorAll('.select-plan');
  const selectedPlanInput = document.getElementById('selected-plan');
  
  // Terms & Conditions Modal
  const termsLink = document.getElementById('terms-link');
  const termsModal = document.getElementById('terms-modal');
  const closeModal = document.querySelector('.close-modal');
  const acceptTerms = document.getElementById('accept-terms');
  const termsCheckbox = document.getElementById('terms');
  
  // Forms
  const orderForm = document.getElementById('order-form');
  
  // Review system has been removed

  // Event Listeners
  
  // Plan Selection
  selectPlanButtons.forEach(button => {
    button.addEventListener('click', function() {
      const plan = this.getAttribute('data-plan');
      selectedPlan = plan;
      selectedPlanInput.value = plan === 'basic' ? 'Basic Plan (₹79)' : 'Advanced Plan (₹129)';
      
      // Scroll to order form
      document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Terms Modal
  termsLink.addEventListener('click', function(e) {
    e.preventDefault();
    termsModal.style.display = 'flex';
  });
  
  closeModal.addEventListener('click', function() {
    termsModal.style.display = 'none';
  });
  
  acceptTerms.addEventListener('click', function() {
    termsCheckbox.checked = true;
    termsModal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(e) {
    if (e.target === termsModal) {
      termsModal.style.display = 'none';
    }
  });
  
  // Star Rating system has been removed
  
  // Form Submissions
  orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!selectedPlan) {
      alert('Please select a plan first!');
      return;
    }
    
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;
    const instagram = document.getElementById('instagram').value;
    
    // Create email body
    const mailtoBody = `I would like to order a PFP with the following details:%0D%0A%0D%0APlan: ${selectedPlanInput.value}%0D%0ADescription: ${description}%0D%0AInstagram: ${instagram}%0D%0A`;
    
    // Open email client
    window.location.href = `mailto:hitendra.edition@example.com?subject=PFP Order Request&body=${mailtoBody}`;
    
    // Reset form after submission
    orderForm.reset();
    selectedPlanInput.value = 'None Selected';
    selectedPlan = null;
  });
  
  // Review form submission handling has been removed
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

// Helper Functions
// highlightStars function has been removed
