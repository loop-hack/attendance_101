
document.getElementById('registerForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (name && email && password) {
    alert('You have successfully registered!');
    document.getElementById('registerForm').reset();
  } else {
    alert('Please fill in all fields!');
  }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Fade-in animation for the heading
gsap.from(".c-heading__middle h3", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out",
  delay: 0.5,
});

// Fade-in animation for the credits
gsap.from(".users-credits ul li", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out",
  delay: 1,
});

// Scroll-triggered animations
gsap.from(".c-heading__top h2", {
  scrollTrigger: {
    trigger: ".c-heading__top",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".c-heading__bottom", {
  scrollTrigger: {
    trigger: ".c-heading__bottom",
    start: "top 80%",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});
