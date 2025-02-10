document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Prevent page reload

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // Basic validation
  if (!name || !email || !message) {
      alert("Please fill out all fields!");
      return;
  }

  alert("Your message has been sent successfully!");
  document.getElementById("contactForm").reset();  // Resets the form
});
