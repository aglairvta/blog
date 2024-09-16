// public/scripts/backToTop.js

function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  
  if (!backToTopButton) return;

  const handleScroll = () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check scroll position on load

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initBackToTop);

// Initialize on mutations
const observer = new MutationObserver(() => {
  // Clear existing observers and initialize
  observer.disconnect();
  initBackToTop();
});

observer.observe(document.body, { childList: true, subtree: true });

// Ensure re-initialization after navigation
document.addEventListener('astro:after-swap', initBackToTop);
