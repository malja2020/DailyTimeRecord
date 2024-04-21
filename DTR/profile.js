// Function to handle changing the profile picture
document.getElementById('profileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('profileImg').src = event.target.result;
    }
    reader.readAsDataURL(file);
});

// Function to handle changing the profile picture
document.getElementById('profileInput').addEventListener('change', function(e) {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById('profileImg').src = event.target.result;
      // Save the image data to local storage
      localStorage.setItem('profileImage', event.target.result);
    }
    reader.readAsDataURL(file);
});

// Function to load profile image from local storage
window.addEventListener('load', function() {
    var profileImage = localStorage.getItem('profileImage');
    if (profileImage) {
        document.getElementById('profileImg').src = profileImage;
    }
});




// Add event listeners to all list items
document.querySelectorAll('.sidebar ul li').forEach(function(item) {
    item.addEventListener('click', function() {
        // Remove 'clicked' class from all list items
        document.querySelectorAll('.sidebar ul li').forEach(function(item) {
            item.classList.remove('clicked');
        });
        // Add 'clicked' class to the clicked item
        item.classList.add('clicked');
    });
});


// Add event listeners to all list items
document.querySelectorAll('.sidebar ul li').forEach(function(item, index) {
    item.addEventListener('click', function() {
        console.log('Item clicked:', index); // Log the clicked index
        // Remove 'clicked' class from all list items
        document.querySelectorAll('.sidebar ul li').forEach(function(item) {
            item.classList.remove('clicked');
        });
        // Add 'clicked' class to the clicked item
        item.classList.add('clicked');

        // Store the index of the clicked item in local storage
        localStorage.setItem('clickedIndex', index);
    });
});

// Load clicked item from local storage when the page loads
window.addEventListener('load', function() {
    var clickedIndex = localStorage.getItem('clickedIndex');
    console.log('Stored index:', clickedIndex); // Log the stored index
    if (clickedIndex !== null) {
        // Add 'clicked' class to the item stored in local storage
        var listItem = document.querySelectorAll('.sidebar ul li')[clickedIndex];
        if (listItem) {
            listItem.classList.add('clicked');
        }
    }
});

// --------------------- DARK MODE ---------------------- //


// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');
  
    // Store the current state of dark mode in local storage
    const darkModeEnabled = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);
  }
  
  // Add event listener to the dark mode toggle button
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
  
  // Check if dark mode is enabled in local storage and apply it
  const darkModeStored = localStorage.getItem('darkMode');
  if (darkModeStored === 'true') {
    document.body.classList.add('dark-mode');
  }
  
  
  

document.getElementById('toggleSidebarBtn').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('sidebarhidden');
});

document.getElementById('toggleSidebarBtn').addEventListener('click', function() {
  var container = document.querySelector('.container');
  container.classList.toggle('container-centered');
});



//  LOGOUT BUTTON

    // Get the logout button
    var logoutBtn = document.getElementById("logoutBtn");

    // Add click event listener to logout button
    logoutBtn.addEventListener("click", function() {
        // Ask for confirmation before logout
        var confirmLogout = confirm("Are you sure you want to logout?");

        // If confirmed, redirect to login page
        if (confirmLogout) {
            window.location.href = "index.html";
        }
    });