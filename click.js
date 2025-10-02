// Minimal animations - only essential interactions

document.addEventListener('DOMContentLoaded', () => {
  // Profile image click handler
  const imagePlaceholder = document.querySelector('.image-placeholder');
  if (imagePlaceholder) {
    imagePlaceholder.addEventListener('click', () => {
      alert('To add your photo:\n1. Take your profile photo\n2. Save it in the portfolio folder\n3. Replace the .image-placeholder div with:\n<img src="your-photo.jpg" alt="Your Name" style="width: 150px; height: 150px; border-radius: 16px; object-fit: cover; border: 4px solid var(--bg-card);" />');
    });
  }
});
