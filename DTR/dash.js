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






     // Clock
     setInterval(() => {
        // get time indicator elements
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let secondes = document.getElementById('seconds');
        let ampm = document.getElementById('ampm');
      
        // digits time indicator
        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');
      
      
        // dot time indicator
        let dotH = document.querySelector('.h_dot');
        let dotM = document.querySelector('.m_dot');
        let dotS = document.querySelector('.s_dot');
      
        // get current time
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let ap = h >= 12 ? 'PM' : 'AM';
      
        // convert to 12 hour format
        if (h > 12) {
          h = h - 12;
        }
      
        // add 0 before single digit
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
      
        // set time and label
        hours.innerHTML = h + '<br>Hours';
        minutes.innerHTML = m + '<br>Minutes';
        secondes.innerHTML = s + '<br>Seconds';
        ampm.innerHTML = ap;
      
        // set time circular indicator
        hh.style.strokeDashoffset = 440 - (440 * h) / 12;
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;
      
        // set dot time position indicator
        dotH.style.transform = `rotate(${h * 30}deg)`;
        dotM.style.transform = `rotate(${m * 6}deg)`;
        dotS.style.transform = `rotate(${s * 6}deg)`;
      }, 1000);







      function updateCalendar() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('date').textContent = now.toLocaleDateString(undefined, { day: '2-digit' });
        document.getElementById('week').textContent = now.toLocaleDateString(undefined, { weekday: 'long' });
        document.getElementById('month').textContent = now.toLocaleDateString(undefined, { month: 'long' });
        document.getElementById('year').textContent = now.getFullYear();
    }

    updateCalendar();