// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Select all sections to add the fade-in animation
  const sections = document.querySelectorAll('section');

  // Use the Intersection Observer API to detect when sections enter the viewport
  const observerOptions = {
    threshold: 0.2 // When 20% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add class to trigger CSS transition
        // Uncomment next line to stop observing after it becomes visible:
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
});
Add script.js
