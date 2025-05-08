document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    // Add click event
    question.addEventListener('click', () => {
      toggleFaq(item);
    });
    
    // Add keyboard navigation
    question.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleFaq(item);
      }
    });
    
    // Add tabindex for keyboard navigation
    question.setAttribute('tabindex', '0');
  });
  
  function toggleFaq(item) {
    const isActive = item.classList.contains('active');
    
    // Close all items
    faqItems.forEach(faqItem => {
      faqItem.classList.remove('active');
    });
    
    // If the clicked item wasn't active, open it
    if (!isActive) {
      item.classList.add('active');
    }
  }
});
