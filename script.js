
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
