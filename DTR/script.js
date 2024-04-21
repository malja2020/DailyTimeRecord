// Add event listener to the "Add Record" button
document.getElementById('addRecordBtn').addEventListener('click', function() {
    // Get date, week, time in, and time out values
    var rawDate = document.getElementById('date').value;
    var date = formatDate(rawDate); // Format date to mm/dd/yyyy
    var week = document.getElementById('week').value;
    var timeIn = convertTo12HourFormat(document.getElementById('timeIn').value);
    var timeOut = convertTo12HourFormat(document.getElementById('timeOut').value);

    // Create a new DTR record object
    var dtrRecord = {
        date: date,
        week: week,
        timeIn: timeIn,
        timeOut: timeOut
    };

    // Save the new DTR record to local storage
    saveDTRRecord(dtrRecord);

    // Add the new DTR record to the UI
    addDTRRecordToUI(dtrRecord);
});
  
  // Function to format date to mm/dd/yyyy
  function formatDate(date) {
    var d = new Date(date);
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    var year = d.getFullYear();
    return month + '/' + day + '/' + year;
  }
  
  // Function to convert time from 24-hour format to 12-hour format
  function convertTo12HourFormat(time) {
    var hour = parseInt(time.split(':')[0]);
    var minute = time.split(':')[1];
    var period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return hour + ':' + minute + ' ' + period;
  }
  
  // Function to save DTR record to local storage
  function saveDTRRecord(record) {
    var dtrRecords = JSON.parse(localStorage.getItem('dtrRecords')) || [];
    dtrRecords.push(record);
    localStorage.setItem('dtrRecords', JSON.stringify(dtrRecords));
  }
  
  // Function to load DTR records from local storage
  function loadDTRRecords() {
    var dtrRecords = JSON.parse(localStorage.getItem('dtrRecords')) || [];
    dtrRecords.forEach(function(record) {
      addDTRRecordToUI(record);
    });
  }
  
  // Function to add DTR record to the UI
  function addDTRRecordToUI(record) {
    var dtrTable = document.getElementById('dtrTable'); // Corrected id here
    var row = dtrTable.insertRow();
    row.innerHTML = '<td>' + record.date + '</td>' +
        '<td>' + record.week + '</td>' +
        '<td>' + record.timeIn + '</td>' +
        '<td>' + record.timeOut + '</td>' +
        '<td id="btn"><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td>';

    // Add event listeners to edit and delete buttons
    var editBtn = row.querySelector('.edit-btn');
    var deleteBtn = row.querySelector('.delete-btn');

    editBtn.addEventListener('click', function() {
        editDTRRecord(row);
    });

    deleteBtn.addEventListener('click', function() {
        deleteDTRRecord(row);
    });
}
  
  // Function to edit a DTR record
  function editDTRRecord(row) {
    var cells = row.cells;
    var newDate = prompt('Enter new date (MM/DD/YYYY):', cells[0].textContent);
    if (newDate === null || newDate === '') {
      return; // Cancelled or empty input
    }
    var newWeek = prompt('Enter new week:', cells[1].textContent);
    if (newWeek === null) {
      return; // Cancelled
    }
    var newTimeIn = prompt('Enter new time in:', cells[2].textContent);
    if (newTimeIn === null) {
      return; // Cancelled
    }
    var newTimeOut = prompt('Enter new time out:', cells[3].textContent);
    if (newTimeOut === null) {
      return; // Cancelled
    }
  
    // Update the cell values
    cells[0].textContent = newDate;
    cells[1].textContent = newWeek;
    cells[2].textContent = newTimeIn;
    cells[3].textContent = newTimeOut;
  
    // Update the record in local storage
    updateDTRRecordInLocalStorage(row.rowIndex - 1, {
      date: newDate,
      week: newWeek,
      timeIn: newTimeIn,
      timeOut: newTimeOut
    });
  }
  
  // Function to delete a DTR record
  function deleteDTRRecord(row) {
    if (confirm('Are you sure you want to delete this record?')) {
      // Remove the row from the table
      row.remove();
  
      // Remove the record from local storage
      removeDTRRecordFromLocalStorage(row.rowIndex - 1);
    }
  }
  
  // Function to update a DTR record in local storage
  function updateDTRRecordInLocalStorage(index, newData) {
    var dtrRecords = JSON.parse(localStorage.getItem('dtrRecords')) || [];
    // Update the record
    dtrRecords[index] = newData;
    // Save the updated records to local storage
    localStorage.setItem('dtrRecords', JSON.stringify(dtrRecords));
  }
  
  // Function to remove a DTR record from local storage
  function removeDTRRecordFromLocalStorage(index) {
    var dtrRecords = JSON.parse(localStorage.getItem('dtrRecords')) || [];
    // Remove the record
    dtrRecords.splice(index, 1);
    // Save the updated records to local storage
    localStorage.setItem('dtrRecords', JSON.stringify(dtrRecords));
  }
  
  // Load DTR records when the page loads
  window.addEventListener('load', loadDTRRecords);
  


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







// Add event listener to the print button
document.getElementById('printButton').addEventListener('click', function() {
    window.print(); // Trigger the browser's print functionality
});


document.getElementById('toggleSidebarBtn').addEventListener('click', function() {
  document.querySelector('.sidebar').classList.toggle('sidebar-hidden');
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

