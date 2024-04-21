// script.js
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginMessage = document.getElementById('loginMessage');
    const signupMessage = document.getElementById('signupMessage');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  
      // Replace this with actual login logic (e.g., check with stored data)
      if (username === 'earlclarence20@gmail.com', 'admin@gmail.com', 'admin' && password === 'earlclarence2020', 'admin') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
        setTimeout(function() {
          window.location.href = 'dashboard.html'; // Redirect to DTR page
        }, 1000);
      } else {
        loginMessage.textContent = 'Invalid username or password';
        loginMessage.style.color = 'red';
      }
    });
  });
  


  