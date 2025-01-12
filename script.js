// Function to handle club joining
function joinClub(button, clubName) {
    button.textContent = 'Joined';
    button.disabled = true;
    alert(`You have joined the ${clubName}!`);
  }
  
  // Meetup form submission handler
  const meetupForm = document.getElementById('meetup-form');
  const meetupsList = document.getElementById('meetups-list');
  
  meetupForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('meetup-name').value;
    const date = document.getElementById('meetup-date').value;
  
    // Check if both name and date are filled
    if (name && date) {
      const meetupCard = document.createElement('div');
      meetupCard.className = 'card';
      meetupCard.innerHTML = `<h3>${name}</h3><p>Date: ${date}</p>`;
  
      // Append the new meetup to the list
      meetupsList.appendChild(meetupCard);
  
      // Clear the form fields
      document.getElementById('meetup-name').value = '';
      document.getElementById('meetup-date').value = '';
  
      // Remove "No meetups" message if it exists
      const noMeetupsMessage = meetupsList.querySelector('p');
      if (noMeetupsMessage) {
        noMeetupsMessage.remove();
      }
    } else {
      alert('Please fill in all fields.');
    }
  });
  
  // Project upload form submission handler
  document.getElementById('project-upload-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('name', document.getElementById('name').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('file', document.getElementById('project-file').files[0]);
  
    try {
      const response = await fetch('/api/upload-project', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        alert('Project uploaded successfully');
      } else {
        alert('Failed to upload project');
      }
    } catch (error) {
      console.error('Error uploading project:', error);
      alert('An error occurred while uploading the project');
    }
  });
  