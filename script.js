// This script uses the Intersection Observer API to add a 'visible' class
// to each section as it scrolls into view, triggering the CSS fade-in animation.

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  const observerOptions = {
    threshold: 0.2 // 20% of the section is visible
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Uncomment the next line if you wish to stop observing after animation
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
Add script.js
