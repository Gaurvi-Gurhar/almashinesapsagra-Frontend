document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your message has been submitted.");
      contactForm.reset();
    });
  }
});
