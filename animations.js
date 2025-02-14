document.addEventListener('DOMContentLoaded', () => {
    const cakeCards = document.querySelectorAll('.cake-card');
    
    cakeCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('fade-in');
      }, 500 * index);  
    });
  });
  